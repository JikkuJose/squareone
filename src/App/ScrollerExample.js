import React from "react"
import styled from "styled-components"

import ScrollArea from "core/ScrollArea"

function ScrollerExample() {
  return (
    <ScrollArea
      className="ba b--black-10 sb-reset sb-black-20 sb-thin"
      height={20}
      width={15}
      horizontalPadding={2}
    >
      <div className="sans-serif f7 pv3 lh-copy">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like). It is a
        long established fact that a reader will be distracted by the readable
        content of a page when looking at its layout. The point of using Lorem
        Ipsum is that it has a more-or-less normal distribution of letters, as
        opposed to using 'Content here, content here', making it look like
        readable English. Many desktop publishing packages and web page editors
        now use Lorem Ipsum as their default model text, and a search for 'lorem
        ipsum' will uncover many web sites still in their infancy. Various
        versions have evolved over the years, sometimes by accident, sometimes
        on purpose (injected humour and the like).
      </div>
    </ScrollArea>
  )
}

export default ScrollerExample
