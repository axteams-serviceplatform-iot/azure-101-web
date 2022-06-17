import React from "react"
import ErrorBase from "./ErrorBase"

const GetImageIdUnknownErrorComponent = () => {
  return (
    <ErrorBase heading="An unknown error has occurred!">
      <p>
        For the <strong>/images/&#x0007B;id&#x0007D;</strong> function this
        could mean that you are trying to access an image ID that does not
        exist, and your function lacks error handling which is why the response
        status code is 500 (Internal Server Error) instead of 404 (Not Found).
      </p>
      <ul>
        <li>Make sure the image ID exists in your Cosmos database</li>
      </ul>
    </ErrorBase>
  )
}

export default GetImageIdUnknownErrorComponent
