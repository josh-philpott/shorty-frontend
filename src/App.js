import React, { Component } from "react"
import { Grid, Navbar, Row, Col } from "react-bootstrap"
import ShortyList from "./components/ShortyList"
import UrlInput from "./components/UrlInput"

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Shortr</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Grid>
          <Row>
            <Col xs={12}>
              <UrlInput />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <ShortyList />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default App
