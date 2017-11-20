import React from "react"
import Animated from "animated/lib/targets/react-dom"

export default class ColorizeOnHover extends React.Component {
  state = {
    animatedValue: new Animated.Value(0),
  }

  up = () =>
    Animated.timing(this.state.animatedValue, {
      toValue: 1,
      duration: 1000,
    }).start()

  down = () => Animated.timing(this.state.animatedValue, { toValue: 0 }).start()

  render() {
    const { animatedValue } = this.state
    const { from, to } = this.props

    return (
      <div>
        <Animated.div
          {...this.props}
          style={{
            background: animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [from, to],
            }),
          }}
          onMouseEnter={this.up}
          onMouseLeave={this.down}
        >
          {this.props.children}
        </Animated.div>
      </div>
    )
  }
}

ColorizeOnHover.defaultProps = {
  from: "#000",
  to: "#fff",
}
