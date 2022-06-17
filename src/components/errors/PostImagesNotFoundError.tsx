import React from "react"
import { environment } from "../../environment"
import ErrorBase from "./ErrorBase"

const PostImagesNotFoundErrorComponent = () => {
  return (
    <ErrorBase heading="The POST /images route was not found (HTTP 404)">
      <ul>
        <li>Make sure your backend is running</li>
        <li>Make sure that you have implemented the POST /images function!</li>
        <li>
          Make sure the website is configured with the correct backend,
          currently it is configured to go to{" "}
          <strong>{environment.baseUrl}</strong>
        </li>
        <li>
          Make sure your POST /images function is exposed under the correct
          route (i.e. /images, not /api/images)
        </li>
      </ul>
    </ErrorBase>
  )
}

export default PostImagesNotFoundErrorComponent
