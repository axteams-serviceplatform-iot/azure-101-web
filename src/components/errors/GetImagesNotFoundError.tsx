import React from "react"
import { environment } from "../../environment"
import ErrorBase from "./ErrorBase"

const GetImagesNotFoundErrorComponent = () => {
  return (
    <ErrorBase heading="The GET /images route was not found (HTTP 404).">
      <ul>
        <li>Check that your backend is up and running</li>
        <li>
          Make sure that you have implemented the <strong>GET /images</strong>{" "}
          function!
        </li>
        <li>
          Current backend is <strong>{environment.baseUrl}</strong>, is this
          correct? If not, edit <strong>src/environment.ts</strong>.
        </li>
        <li>
          Make sure your GET /images function is exposed under the correct route
          (i.e. /images, not /api/images)
        </li>
      </ul>
    </ErrorBase>
  )
}

export default GetImagesNotFoundErrorComponent
