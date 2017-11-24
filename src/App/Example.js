import React from "react"
import styled from "styled-components"
import { transparentize } from "polished"

import NestedContainer from "core/NestedContainer"
import ColorizeOnHover from "animations/ColorizeOnHover"

class Example extends React.Component {
  render() {
    return (
      <NestedContainer className="ch pv4">
        <ColorizeOnHover
          from={transparentize(0.3, "green")}
          to={transparentize(0.6, "blue")}
          className="pa3 br2 pointer"
        >
          <Title>{title}</Title>
        </ColorizeOnHover>
        <Meta>{meta}</Meta>
        <Snippet>{snippet}</Snippet>
      </NestedContainer>
    )
  }
}

export default Example

const Title = styled.div.attrs({
  className: "satisfy lh-title f1",
})`

`

const Meta = styled.div.attrs({
  className: "mv4 montserrat ttu black-60 f6",
})`

`

const Snippet = styled.div.attrs({
  className: "open-sans f4 lh-copy black-70",
})`

`

const title = "Styled Components for Sanity!"

const meta = "Jikku Jose ● December 30"

const snippet =
  "There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of lorem ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
