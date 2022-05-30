import bsCustomFileInput from "bs-custom-file-input"
import React, { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { SubmitHandler, useForm } from "react-hook-form"
import { PossibleCORSError } from "../api/http"
import {
  PostImagesInternalServerError,
  PostImagesNotFoundError,
  PostImagesResponseCodeError,
  uploadImageAsFile,
} from "../api/images"
import CORSErrorComponent from "./errors/CorsError"
import PostImagesInternalServerErrorComponent from "./errors/PostImagesInternalServerError"
import PostImagesNotFoundErrorComponent from "./errors/PostImagesNotFoundError"
import PostImagesResponseCodeErrorComponent from "./errors/PostImagesResponseCodeError"
import UnknownErrorComponent from "./errors/UnknownError"

type FormValues = {
  fileList: FileList
}

const UploadImage: React.FC = () => {
  const [error, setError] = useState<React.FC>()

  const { register, handleSubmit } = useForm<FormValues>()

  useEffect(() => {
    bsCustomFileInput.init()
  })

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const file = data.fileList.item(0)

    if (file) {
      try {
        await uploadImageAsFile(file)
      } catch (err) {
        if (err instanceof PostImagesNotFoundError) {
          setError(PostImagesNotFoundErrorComponent)
        } else if (err instanceof PostImagesInternalServerError) {
          setError(PostImagesInternalServerErrorComponent)
        } else if (err instanceof PossibleCORSError) {
          setError(CORSErrorComponent)
        } else if (err instanceof PostImagesResponseCodeError) {
          setError(PostImagesResponseCodeErrorComponent)
        } else {
          setError(UnknownErrorComponent)
        }
      }
    }
  }

  return (
    <div className="p-5 mb-2 bg-light text-dark">
      {error}
      <Form>
        <Form.File id="myfile" custom>
          <Form.File.Input {...register("fileList")} />
          <Form.File.Label>
            Select a JPG photo from your local computer
          </Form.File.Label>
        </Form.File>
        <Button
          type="submit"
          id="inputGroupFileAddon01"
          variant="primary"
          size="lg"
          block
          onClick={handleSubmit(onSubmit)}
        >
          Submit photo
        </Button>
      </Form>
    </div>
  )
}

export default UploadImage
