import React from "react"
import ErrorBase from "./ErrorBase"

const GetImagesContentTypeErrorComponent = () => {
  return (
    <ErrorBase heading="The response content type header returned from GET /images is not right.">
      <p>
        Make sure your function sets the response <strong>Content-Type</strong>{" "}
        header to <strong>application/json</strong>.
      </p>
    </ErrorBase>
  )
}

export default GetImagesContentTypeErrorComponent
