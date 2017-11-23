import React from "react"
import styled from "styled-components"

import NestedContainer from "../core/NestedContainer"
import Chain from "../animations/Chain"

function Sqaures() {
  return (
    <NestedContainer className="ch" innerClassName="mt4">
      <Chain>
        <Box size={100} background="red">
          0
        </Box>
        <Box size={90} background="green">
          1
        </Box>
        <Box size={80} background="gray">
          3
        </Box>
        <Box size={70} background="pink">
          4
        </Box>
      </Chain>
    </NestedContainer>
  )
}

export default Sqaures

const Box = styled.div.attrs({
  className: "code ca br3 mr3",
})`
  cursor: ${p => p.cursor || "pointer"};
  background: ${props => props.background};
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`
