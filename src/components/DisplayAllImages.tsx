import React, { useEffect, useState } from "react"
import { Col, Figure, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { CORSError } from "../api/http"
import {
  getImages,
  GetImagesContentTypeError,
  GetImagesNotFoundError,
  GetImagesResponseBodyError,
  Image,
} from "../api/images"
import CORSErrorComponent from "./errors/CorsError"
import GetImagesContentTypeErrorComponent from "./errors/GetImagesContentTypeError"
import GetImagesNotFoundErrorComponent from "./errors/GetImagesNotFoundError"
import GetImagesResponseBodyErrorComponent from "./errors/GetImagesResponseBodyError"

const DisplayAllImages: React.FC = () => {
  const [images, setImages] = useState<Image[]>([])
  const [error, setError] = useState<React.FC>()

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const images = await getImages()
        setImages(images)
      } catch (err) {
        if (err instanceof GetImagesNotFoundError) {
          setError(GetImagesNotFoundErrorComponent)
        } else if (err instanceof GetImagesContentTypeError) {
          setError(GetImagesContentTypeErrorComponent)
        } else if (err instanceof GetImagesResponseBodyError) {
          setError(GetImagesResponseBodyErrorComponent)
        } else if (err instanceof CORSError) {
          setError(CORSErrorComponent)
        }
      }
    }

    fetchImages() // to make sure it renders immediately

    const interval = setInterval(() => {
      fetchImages()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="p-5 mb-2 bg-light text-dark">
      <h2>My Photos</h2>
      <p className="fw-lighter">
        Click on a photo to view it in larger size. This list is refreshed every
        5 seconds.
      </p>
      <Row>
        {error ? (
          <Col>{error}</Col>
        ) : (
          <>
            <Col className="text-center">
              {images.map((image, idx) => {
                return (
                  <Link to={`/photo/${image.id}`} key={idx}>
                    {image.thumbnail ? (
                      <ThumbnailComponent uri={image.thumbnail} />
                    ) : (
                      <FullsizeImageComponent uri={image.uri} />
                    )}
                  </Link>
                )
              })}
            </Col>
          </>
        )}
      </Row>
    </div>
  )
}

const ThumbnailComponent: React.FC<{ uri: string }> = (props: {
  uri: string
}) => {
  return (
    <Figure>
      <Figure.Image
        className="p-1 m-1 bg-success"
        src={props.uri}
        width="200"
        fluid
      />
      <Figure.Caption>Thumbnail image!</Figure.Caption>
    </Figure>
  )
}

const FullsizeImageComponent: React.FC<{ uri: string }> = (props: {
  uri: string
}) => {
  return (
    <Figure>
      <Figure.Image
        className="p-1 m-1 bg-danger"
        src={props.uri}
        width="200"
        fluid
      />
      <Figure.Caption>Full-sized image!</Figure.Caption>
    </Figure>
  )
}

export default DisplayAllImages
