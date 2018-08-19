import React, { Component } from "react"
import axios from "axios"

import Error from "./error"
import "../App.css"

class ShortyList extends Component {
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
      return <p>Loading...</p>
    }

    return (
      <div className="App-intro">
        {isError && <Error enabled={isError} message="There was an error!" />}

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">CUID</th>
              <th scope="col">Date Added</th>
              <th scope="col">Original URL</th>
              <th scope="col">Short URL</th>
            </tr>
          </thead>
          <tbody>
            {this.state.shortys.map(shorty => (
              <tr>
                <td>{shorty.cuid}</td>
                <td>{shorty.dateAdded}</td>
                <td>{shorty.url}</td>
                <td>{shorty.shortUrl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ShortyList
