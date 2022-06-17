import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import DisplayAllImages from "./components/DisplayAllImages"
import ThisComponentIsAJoke from "./components/Joke"
import UploadImage from "./components/UploadImage"
import ViewImage from "./components/ViewImage"

const App = () => {
  return (
    <BrowserRouter>
      <Container fluid className="w-75">
        <Row>
          <Col>
            <Link to="/">
              <h1 className="pt-5 pl-5 pr-5 display-4 text-center">
                My Photo Album
              </h1>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <ThisComponentIsAJoke />
          </Col>
        </Row>
        <Switch>
          <Route path="/" exact>
            <Row>
              <Col>
                <UploadImage />
              </Col>
            </Row>
            <Row>
              <Col>
                <DisplayAllImages />
              </Col>
            </Row>
          </Route>
          <Route path="/photo/:photoId">
            <Row>
              <Col>
                <ViewImage />
              </Col>
            </Row>
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default App
