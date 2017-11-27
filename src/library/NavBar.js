import React from "react"
import styled from "styled-components"

import NestedContainer from "core/NestedContainer"

function NavBar({ leftControls, rightControls, className }) {
  return (
    <NestedContainer
      className={className || "ch bg-black-20 h3"}
      innerClassName="flex justify-between sans-serif white cv"
    >
      <LeftControls>{leftControls}</LeftControls>
      <RightControls>{rightControls}</RightControls>
    </NestedContainer>
  )
}

const LeftControls = styled.div.attrs({
  className: "flex cv",
})`

`

const RightControls = styled.div.attrs({
  className: "flex",
})`

`

export default NavBar
