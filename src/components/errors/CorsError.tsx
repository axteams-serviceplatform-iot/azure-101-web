import React from "react"
import ErrorBase from "./ErrorBase"

const CORSErrorComponent = () => {
  return (
    <ErrorBase heading="Possible CORS error.">
      <p>Make sure that you have configured CORS for your Function App:</p>
      <ul>
        <li>
          If you are running the backend{" "}
          <strong>locally on your own machine</strong> add CORS settings to your
          local.settings.json according to the example{" "}
          <a href="https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=macos%2Ccsharp%2Cbash#local-settings-file">
            here
          </a>
        </li>
        <li>
          If you are using your <strong>deployed Function App in Azure</strong>{" "}
          follow the instructions{" "}
          <a href="https://docs.microsoft.com/en-us/cli/azure/functionapp/cors?view=azure-cli-latest">
            here
          </a>
        </li>
      </ul>
    </ErrorBase>
  )
}

export default CORSErrorComponent
