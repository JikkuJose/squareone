import React from "react"
import util from "lodash/util"

import SiteWrapper from "../core/SiteWrapper"

import Example from "./Example"
import BlueBar from "./BlueBar"
import Squares from "./Squares"

class App extends React.Component {
  render() {
    return (
      <SiteWrapper>
        <BlueBar />
        <Squares />
        {util.times(3, i => <Example key={i} />)}
      </SiteWrapper>
    )
  }
}

export default App
