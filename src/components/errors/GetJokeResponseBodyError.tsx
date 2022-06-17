import React from "react"
import ErrorBase from "./ErrorBase"

const GetJokeResponseBodyErrorComponent = () => {
  return (
    <ErrorBase heading="The response body returned from GET /joke is not right.">
      <p>
        Make sure your joke function returns a response body similar to the
        following:
      </p>
      <pre>{JSON.stringify({ text: "This is my joke!" }, null, 2)}</pre>
    </ErrorBase>
  )
}

export default GetJokeResponseBodyErrorComponent
