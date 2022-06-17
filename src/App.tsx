import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom"
import DisplayAllImages from "./components/DisplayAllImages"
import ThisComponentIsAJoke from "./components/Joke"
import UploadImage from "./components/UploadImage"
import ViewImage from "./components/ViewImage"

const App = () => {
  return (
    <Container fluid className="w-75">
      <BrowserRouter>
        <Row>
          <Col>
            <h1 className="pt-5 pl-5 pr-5 display-4 text-center">
              <Link to="/">My Photo Album</Link>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <ThisComponentIsAJoke />
          </Col>
        </Row>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="photo" element={<ViewImageRoute />}>
            <Route path=":photoId" element={<ViewImage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

const Home = () => {
  return (
    <>
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
    </>
  )
}

const ViewImageRoute = () => {
  return (
    <Row>
      <Col>
        <Outlet />
      </Col>
    </Row>
  )
}

export default App
