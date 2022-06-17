import React from "react"
import { environment } from "../../environment"
import ErrorBase from "./ErrorBase"

const GetImageIdNotFoundErrorComponent = () => {
  return (
    <ErrorBase heading="Either the GET /images/&#x0007B;id&#x0007D; route is missing or the image with this ID does not exist.">
      <ul>
        <li>Make sure your backend is running</li>
        <li>
          Make sure that you have implemented the GET
          /images/&#x0007B;id&#x0007D; function!
        </li>
        <li>
          Make sure the website is configured with the correct backend,
          currently it is configured to go to{" "}
          <strong>{environment.baseUrl}</strong>
        </li>
        <li>
          Make sure your function is exposed under the
          /images/&#x0007B;id&#x0007D; route (i.e. not
          /api/images/&#x0007B;id&#x0007D;)
        </li>
        <li>
          If your function includes error handling so that you would respond 404
          when an image with a given ID does not exist, then make sure you are
          using the correct image ID.
        </li>
      </ul>
    </ErrorBase>
  )
}

export default GetImageIdNotFoundErrorComponent
