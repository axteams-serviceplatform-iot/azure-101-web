import { environment } from "../environment"
import { getRequest } from "./http"

export interface Joke {
  text: string
}

export class JokeNotFoundError extends Error {}
export class JokeContentTypeError extends Error {}
export class JokeResponseBodyError extends Error {}
export class JokeResponseCodeError extends Error {}

export const getJoke = async (): Promise<Joke> => {
  const res = await getRequest(`${environment.baseUrl}/joke`)

  if (res.status === 404) {
    throw new JokeNotFoundError()
  }

  if (res.status !== 200) {
    throw new JokeResponseCodeError()
  }

  const contentType = res.headers.get("content-type") ?? ""
  if (!contentType.includes("application/json")) {
    throw new JokeContentTypeError()
  }

  const body = await res.json()

  if (!body.text) {
    throw new JokeResponseBodyError()
  }

  return body
}
