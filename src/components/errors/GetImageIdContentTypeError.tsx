import React from "react"
import ErrorBase from "./ErrorBase"

const GetImageIdContentTypeErrorComponent = () => {
  return (
    <ErrorBase heading="The response content type header returned from GET /images/&#x0007B;id&#x0007D; is not right.">
      <p>
        Make sure your function sets the response <strong>Content-Type</strong>{" "}
        header to <strong>application/json</strong>.
      </p>
    </ErrorBase>
  )
}

export default GetImageIdContentTypeErrorComponent
