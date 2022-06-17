import React from "react"
import ErrorBase from "./ErrorBase"

const GetImageIdResponseBodyErrorComponent = () => {
  return (
    <ErrorBase heading="The response body returned from GET /images/&#x0007B;id&#x0007D; is not right.">
      <p>
        Make sure your function returns a response body similar to the
        following:
      </p>
      <pre>
        {JSON.stringify(
          {
            id: "<image id>",
            uri: "https://<account>.blob.core.windows.net/images/<image id>.jpg",
          },
          null,
          2
        )}
      </pre>
    </ErrorBase>
  )
}

export default GetImageIdResponseBodyErrorComponent
