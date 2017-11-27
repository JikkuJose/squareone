import React from "react"
import util from "lodash/util"

import SiteWrapper from "core/SiteWrapper"

import Example from "./Example"
import BlueBar from "./BlueBar"
import Squares from "./Squares"
import Flipper from "./Flipper"
import ScrollerExample from "./ScrollerExample"

class App extends React.Component {
  render() {
    return (
      <SiteWrapper>
        <BlueBar />
      </SiteWrapper>
    )
  }
}

export default App
