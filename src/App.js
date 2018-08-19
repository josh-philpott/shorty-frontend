import React, { Component } from "react"
import axios from "axios"

import Error from "./components/error"
import logo from "./logo.svg"
import "./App.css"

class App extends Component {
  state = {
    shortys: [],
    isLoading: true,
    isError: false
  }

  async fetchShortys() {
    this.setState(
      {
        isLoading: true,
        isError: false
      },
      async () => {
        try {
          console.log("Making request to shortener API")
          let response = await axios.get("http://localhost:8000/api2/shorten")

          this.setState({
            isLoading: false,
            isError: false,
            shortys: response.data.shortys
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

  componentDidMount() {
    this.fetchShortys()
  }

  render() {
    let { isLoading, isError } = this.state

    if (isLoading) {
      //Show Loading Page
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Shortys</h1>
          </header>
          <p className="App-intro">Loading...</p>
        </div>
      )
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Shortys</h1>
        </header>

        {isError && <Error enabled={isError} message="There was an error!" />}

        {this.state.shortys.map(shorty => (
          <div className="App-intro">
            <p>{shorty.url}</p>
            <p>{shorty.shortUrl}</p>
            <p>{shorty.dateAdded}</p>
            <p>{shorty.cuid}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default App
