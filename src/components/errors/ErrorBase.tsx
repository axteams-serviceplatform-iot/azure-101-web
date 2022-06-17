import React from "react"
import { Alert, Col, Container, Image, Row } from "react-bootstrap"
import clippy from "../../assets/angryclippy.png"

interface Props {
  heading: string
  children: React.ReactNode
}

const ErrorBase = (props: Props) => {
  return (
    <Alert variant="danger">
      <Alert.Heading>Oh snap! {props.heading}</Alert.Heading>
      <Container fluid>
        <Row>
          <Col xs={2}>
            <Image className="image-class-name p-1" src={clippy} width="80" />
          </Col>
          <Col>{props.children}</Col>
        </Row>
      </Container>
    </Alert>
  )
}

export default ErrorBase
