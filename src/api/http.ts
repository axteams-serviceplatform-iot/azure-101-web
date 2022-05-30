export class PossibleCORSError extends Error {}
export class UnknownError extends Error {}

export const postRequest = (url: string, body: unknown): Promise<Response> => {
  console.log(JSON.stringify(body))

  return send(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  })
}

export const postImageRequest = (
  url: string,
  body: File
): Promise<Response> => {
  return send(url, {
    method: "POST",
    headers: { "content-type": "application/octet-stream" },
    body,
  })
}

export const getRequest = async (url: string): Promise<Response> => {
  return await send(url, { method: "GET" })
}

const send = async (url: string, init: RequestInit): Promise<Response> => {
  const setHeaders = () => {
    init.headers = {
      ...init.headers,
      "access-control-allow-origin": "*",
    }
  }

  setHeaders()

  let res = new Response()

  try {
    res = await fetch(url, init)
  } catch (err) {
    throw new PossibleCORSError()
  }

  return res
}
