import React, { useEffect, useState } from "react"
import { Col, Container, Image as ImageComponent, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import {
  getImageById,
  GetImageIdContentTypeError,
  GetImageIdNotFoundError,
  GetImageIdResponseBodyError,
  Image,
} from "../api/images"
import noImageAvailable from "../assets/noimageavailable.jpg"
import GetImageIdContentTypeErrorComponent from "./errors/GetImageIdContentTypeError"
import GetImageIdNotFoundErrorComponent from "./errors/GetImageIdNotFoundError"
import GetImageIdResponseBodyErrorComponent from "./errors/GetImageIdResponseBodyError"
import GetImageIdUnknownErrorComponent from "./errors/GetImageIdUnknownError"

interface RouteParams {
  photoId: string
}

const ViewImage = () => {
  const { photoId } = useParams<RouteParams>()
  const [photo, setPhoto] = useState<Image>()
  const [error, setError] = useState<React.ReactNode>()

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const p = await getImageById(photoId)
        setPhoto(p)
      } catch (err) {
        if (err instanceof GetImageIdNotFoundError) {
          setError(GetImageIdNotFoundErrorComponent)
        } else if (err instanceof GetImageIdContentTypeError) {
          setError(GetImageIdContentTypeErrorComponent)
        } else if (err instanceof GetImageIdResponseBodyError) {
          setError(GetImageIdResponseBodyErrorComponent)
        } else {
          setError(GetImageIdUnknownErrorComponent)
        }
      }
    }
    fetchImage()
  }, [photoId])

  return (
    <Container className="p-5 mb-2 bg-light text-dark">
      <>
        {error ?? (
          <Row>
            <Col>{error}</Col>
          </Row>
        )}
        <Row className="text-center">
          <Col>
            <h3>{photoId}</h3>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            {photo?.uri ? (
              <ImageComponent
                className="image-class-name w-100"
                src={photo.uri}
              />
            ) : (
              <ImageComponent
                className="image-class-name w-100"
                src={noImageAvailable}
              />
            )}
          </Col>
        </Row>
      </>
    </Container>
  )
}

export default ViewImage
