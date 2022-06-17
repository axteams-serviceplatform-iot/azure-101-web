import React from "react"
import ErrorBase from "./ErrorBase"

const PostImagesResponseCodeErrorComponent = () => {
  return (
    <ErrorBase heading="Wrong response code!">
      <p>
        The upload probably worked, but your function is expected to respond
        with a <strong>201</strong> response code. You will see this error
        message until your function responds with the correct response code.
      </p>
    </ErrorBase>
  )
}

export default PostImagesResponseCodeErrorComponent
