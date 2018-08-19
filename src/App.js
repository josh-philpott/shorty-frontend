import React, { Component } from "react"

import ShortyList from "./components/ShortyList"
import UrlInput from "./components/UrlInput"
import logo from "./logo.svg"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="text-center">URL Shortener</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <UrlInput />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <ShortyList />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
