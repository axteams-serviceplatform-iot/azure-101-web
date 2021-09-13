import React from "react"
import ErrorBase from "./ErrorBase"

const GetJokeResponseCodeErrorComponent: React.FC = () => {
  return (
    <ErrorBase heading="The GET /joke route replied with the wrong response code.">
      <p>Make sure your function responds with a 200 OK response code.</p>
    </ErrorBase>
  )
}

export default GetJokeResponseCodeErrorComponent
