import React from "react"
import ErrorBase from "./ErrorBase"

const UnknownErrorComponent = () => {
  return (
    <ErrorBase heading="An unknown error has occurred!">
      <p>
        This means you have discovered an error that the course instructors have
        not thought could happen. Extra points to you! Now please report this
        error to the course instructors.
      </p>
    </ErrorBase>
  )
}

export default UnknownErrorComponent
