import React, { Component } from "react"
import axios from "axios"

class UrlInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      isWaiting: false,
      isError: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
            .then(function(response) {
              console.log(response)
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
    alert("A name was submitted: " + this.state.value)
    this.fetchNewShorty()
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Paste the Original URL Here"
            aria-label="Paste the Original URL Here"
            aria-describedby="button-addon2"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="button-addon2"
            >
              Shorten
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default UrlInput
