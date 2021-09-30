import { environment } from "../environment"
import { getRequest, postImageRequest, postRequest, UnknownError } from "./http"

export interface Image {
  id: string
  uri: string
  thumbnail?: string
}

export class GetImagesNotFoundError extends Error {}
export class GetImagesResponseBodyError extends Error {}
export class GetImagesContentTypeError extends Error {}

export const getImages = async (): Promise<Image[]> => {
  const res = await getRequest(`${environment.baseUrl}/images`)

  if (res.status === 404) {
    throw new GetImagesNotFoundError()
  }

  const contentType = res.headers.get("content-type") ?? ""
  if (!contentType.includes("application/json")) {
    throw new GetImagesContentTypeError()
  }

  const body = await res.json()

  if (!Array.isArray(body)) {
    throw new GetImagesResponseBodyError()
  }

  const isResponseValid = body.every((image) => {
    return image.id && image.uri
  })

  if (!isResponseValid) {
    throw new GetImagesResponseBodyError()
  }

  return body
}

export class GetImageIdNotFoundError extends Error {}
export class GetImageIdResponseBodyError extends Error {}
export class GetImageIdContentTypeError extends Error {}

export const getImageById = async (imageId: string): Promise<Image> => {
  const res = await getRequest(`${environment.baseUrl}/images/${imageId}`)

  if (res.status === 404) {
    throw new GetImageIdNotFoundError()
  }

  if (res.status === 500) {
    throw new UnknownError()
  }

  const contentType = res.headers.get("content-type") ?? ""
  if (!contentType.includes("application/json")) {
    throw new GetImageIdContentTypeError()
  }

  const body = await res.json()

  if (!body.id || !body.uri) {
    throw new GetImageIdResponseBodyError()
  }

  return body
}

export class PostImagesNotFoundError extends Error {}
export class PostImagesInternalServerError extends Error {}
export class PostImagesResponseCodeError extends Error {}

export const uploadImageAsFile = async (file: File): Promise<void> => {
  const res = await postImageRequest(`${environment.baseUrl}/images`, file)

  if (res.status === 404) {
    throw new PostImagesNotFoundError()
  }

  if (res.status === 500) {
    throw new PostImagesInternalServerError()
  }

  if (res.status !== 201) {
    throw new PostImagesResponseCodeError()
  }

  if (res.status !== 201 && res.status !== 404 && res.status !== 500) {
    throw new UnknownError()
  }
}

export const uploadImageAsBase64 = async (file: File): Promise<void> => {
  const b64 = await file2Base64(file)

  const body = {
    data: b64,
  }

  const res = await postRequest(`${environment.baseUrl}/images`, body)

  if (res.status === 404) {
    throw new PostImagesNotFoundError()
  }

  if (res.status === 500) {
    throw new PostImagesInternalServerError()
  }

  if (res.status !== 201) {
    throw new PostImagesResponseCodeError()
  }

  if (res.status !== 201 && res.status !== 404 && res.status !== 500) {
    throw new UnknownError()
  }
}

const file2Base64 = (file: File): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      const result = reader.result
        ? reader.result.toString().replace("data:", "").replace(/^.+,/, "")
        : "fail"

      resolve(result)
    }

    reader.onerror = (error) => reject(error)
  })
}
