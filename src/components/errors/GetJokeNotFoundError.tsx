import React from "react"
import { environment } from "../../environment"
import ErrorBase from "./ErrorBase"

const GetJokeNotFoundErrorComponent = () => {
  return (
    <ErrorBase heading="The GET /joke route was not found (HTTP 404).">
      <ul>
        <li>Check that your backend is up and running</li>
        <li>
          Make sure that you have implemented the <strong>GET /joke</strong>{" "}
          function!
        </li>
        <li>
          Current backend is <strong>{environment.baseUrl}</strong>, is this
          correct? If not, edit <strong>src/environment.ts</strong>.
        </li>
        <li>Make sure your joke function is exposed under the /joke route</li>
        <li>
          Finally, make sure you joke is funny! Clippy is not easily amused.
        </li>
      </ul>
    </ErrorBase>
  )
}

export default GetJokeNotFoundErrorComponent
