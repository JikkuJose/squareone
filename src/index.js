import React from "react"
import { render } from "react-dom"
import "tachyons"

import "./styles/fonts.css"
import "./styles/tachyons_extended.css"
import "./styles/custom.css"

import App from "./App"

const Hey = () => <div className="debug" />

render(<App />, document.getElementById("root"))
