import React from "react"
import styled from "styled-components"

import "./style.css"

const scrollBarWidth = 1

function ScrollArea(props) {
  return (
    <Wrapper {...props}>
      <Container width={props.width - scrollBarWidth}>
        <Content>{props.children}</Content>
      </Container>
    </Wrapper>
  )
}

export default ScrollArea

ScrollArea.defaultProps = {
  width: 6,
}

const Wrapper = styled.div.attrs({
  className: "absolute squareone-scrollarea flex",
})`
  width: ${p => p.width}rem;
  height: ${p => p.height}rem;

  overflow: hidden;
  ${p => p.showScrollBar && "overflow-y: scroll"};

  &:hover {
    overflow-y: scroll;
  }
`

const Container = styled.div.attrs({
  className: "",
})`
  width: ${p => p.width}rem;
`

const Content = styled.div.attrs({
  className: "",
})`
  padding-left: 1rem;
`
