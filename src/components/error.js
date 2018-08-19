import React from "react"

export default function Error({ enabled, message }) {
  if (!enabled) {
    return null
  }

  return (
    <div className="App-intro">
      <p>message</p>
    </div>
  )
}
