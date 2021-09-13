import React, { useEffect, useState } from "react"
import { CORSError } from "../api/http"
import {
  getJoke,
  Joke,
  JokeContentTypeError,
  JokeNotFoundError,
  JokeResponseBodyError,
  JokeResponseCodeError,
} from "../api/joke"
import CORSErrorComponent from "./errors/CorsError"
import GetJokeContentTypeErrorComponent from "./errors/GetJokeContentTypeError"
import GetJokeNotFoundErrorComponent from "./errors/GetJokeNotFoundError"
import GetJokeResponseBodyErrorComponent from "./errors/GetJokeResponseBodyError"
import GetJokeResponseCodeErrorComponent from "./errors/GetJokeResponseCodeError"

const ThisComponentIsAJoke: React.FC = () => {
  const [joke, setJoke] = useState<Joke>()
  const [error, setError] = useState<React.FC>()

  useEffect(() => {
    const getNewJoke = async () => {
      try {
        const j = await getJoke()
        setJoke(j)
      } catch (err) {
        if (err instanceof JokeNotFoundError) {
          setError(GetJokeNotFoundErrorComponent)
        }
        if (err instanceof JokeResponseBodyError) {
          setError(GetJokeResponseBodyErrorComponent)
        }
        if (err instanceof JokeContentTypeError) {
          setError(GetJokeContentTypeErrorComponent)
        }
        if (err instanceof JokeResponseCodeError) {
          setError(GetJokeResponseCodeErrorComponent)
        }
        if (err instanceof CORSError) {
          setError(CORSErrorComponent)
        }
      }
    }

    getNewJoke()
  }, [])

  return (
    <>
      {error ? (
        error
      ) : (
        <blockquote className="blockquote text-center pb-5">
          <p>
            <strong>Joke of the day:</strong> {joke ? joke.text : ""}
          </p>
        </blockquote>
      )}
    </>
  )
}

export default ThisComponentIsAJoke
