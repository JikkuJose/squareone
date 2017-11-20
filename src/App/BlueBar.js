import React from "react"
import styled from "styled-components"

import NavBar from "library/NavBar"
import Bicycle from "icons/Bicycle"

import Shake from "animations/Shake"
import Drag from "animations/Drag"
import Aux from "core/Aux"

function BlueBar() {
  return (
    <NavBar
      className="bg-blue ch h3"
      leftControls={
        <Aux>
          <Shake className="pointer">
            <Bicycle scale={0.8} color="#FFF" />
          </Shake>
          <Drag className="move" startPosition={{ x: 50, y: 18 }}>
            <Title>Standard Template</Title>
          </Drag>
        </Aux>
      }
    />
  )
}

export default BlueBar

const Title = styled.div.attrs({
  className: "ml2 f4 pa1 avenir ttu tracked",
})``
