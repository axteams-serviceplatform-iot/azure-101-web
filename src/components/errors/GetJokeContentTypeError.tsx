import React from "react"
import ErrorBase from "./ErrorBase"

const GetJokeContentTypeErrorComponent = () => {
  return (
    <ErrorBase heading="The response content type header returned from GET /joke is not right.">
      <p>
        Make sure your joke function sets the response{" "}
        <strong>Content-Type</strong> header to{" "}
        <strong>application/json</strong>.
      </p>
    </ErrorBase>
  )
}

export default GetJokeContentTypeErrorComponent
