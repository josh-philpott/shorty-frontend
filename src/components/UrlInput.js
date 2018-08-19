import React, { Component } from "react"
import {
  Form,
  FormGroup,
  FormControl,
  Button,
  Col,
  Modal
} from "react-bootstrap"

import axios from "axios"

class UrlInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      isWaiting: false,
      isError: false,
      show: false,
      shortyUrl: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  async fetchNewShorty() {
    this.setState(
      {
        isLoading: true,
        isError: false
      },

      async () => {
        try {
          console.log("Making request to shortener API")
          axios
            .post("http://localhost:8000/api2/shorten", {
              url: this.state.value
            })
            .then(response => {
              debugger
              this.setState({
                show: true,
                shortyUrl: "http://localhost:8000/" + response.data.shorty.key
              })
            })
            .catch(function(error) {
              console.log(error)
            })
        } catch (error) {
          this.setState({
            isError: true,
            isLoading: false
          })
        }
      }
    )
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    this.fetchNewShorty()
    event.preventDefault()
  }

  handleClose(event) {
    this.setState({ show: false })
  }

  render() {
    return (
      <div>
        <Col xs={6} xsOffset={3}>
          <Form inline onSubmit={this.handleSubmit}>
            <FormGroup controlId="formInlineEmail">
              <FormControl
                type="text"
                placeholder="Paste URL To Shorten..."
                value={this.state.value}
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button type="submit">Shorten</Button>
          </Form>
        </Col>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Button onClick={this.handleClose}>X</Button>
          </Modal.Header>
          <Modal.Body>
            <h4>Short URL</h4>
            <a href={this.state.shortyUrl}>{this.state.shortyUrl}</a>
          </Modal.Body>
          <Modal.Footer />
        </Modal>
      </div>
    )
  }
}

export default UrlInput
