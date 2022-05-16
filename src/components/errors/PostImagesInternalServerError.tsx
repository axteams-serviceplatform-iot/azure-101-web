import React from "react"
import ErrorBase from "./ErrorBase"

const PostImagesInternalServerErrorComponent: React.FC = () => {
  return (
    <ErrorBase heading="Internal Server Error (500)">
      <p>
        The logs of the Function App will probably give you a hint regarding the
        failure.
      </p>
    </ErrorBase>
  )
}

export default PostImagesInternalServerErrorComponent
