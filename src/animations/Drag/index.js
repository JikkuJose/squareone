import React from "react"
import Animated from "animated/lib/targets/react-dom"
import PropTypes from "prop-types"

import xyPan from "./xyPan"

export default class Drag extends React.Component {
  state = {
    anim: {
      x: new Animated.Value(this.props.startPosition.x),
      y: new Animated.Value(this.props.startPosition.y),
    },
  }

  render() {
    const { constrainX = false, constrainY = false } = this.props

    return (
      <Animated.div
        {...this.props}
        style={{
          top: this.state.anim.y,
          left: this.state.anim.x,
          position: "absolute",
        }}
        {...xyPan(this.state.anim, { constrainX, constrainY })}
      >
        {this.props.children}
      </Animated.div>
    )
  }
}

Drag.defaultProps = {
  startPosition: {
    x: 0,
    y: 0,
  },
  constrainX: false,
  constrainY: false,
}

Drag.propTypes = {
  startPosition: PropTypes.object,
  constrainX: PropTypes.bool,
  constrainY: PropTypes.bool,
}
