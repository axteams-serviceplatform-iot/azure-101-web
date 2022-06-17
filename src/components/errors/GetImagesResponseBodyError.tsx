import React from "react"
import ErrorBase from "./ErrorBase"

const GetImagesResponseBodyErrorComponent = () => {
  return (
    <ErrorBase heading="The response body returned from GET /images is not right.">
      <p>
        Make sure your function returns a response body similar to the
        following:
      </p>
      <pre>
        {JSON.stringify(
          [
            {
              id: "1",
              uri: "https://<account>.blob.core.windows.net/<container>/1.jpg",
            },
            {
              id: "2",
              uri: "https://<account>.blob.core.windows.net/<container>/2.jpg",
            },
          ],
          null,
          2
        )}
      </pre>
    </ErrorBase>
  )
}

export default GetImagesResponseBodyErrorComponent
