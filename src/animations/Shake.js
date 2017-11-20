import React from "react"
import Animated from "animated/lib/targets/react-dom"

export default class Shake extends React.Component {
  state = {
    animatedValue: new Animated.Value(0),
    intervalId: null,
  }

  up = () => Animated.spring(this.state.animatedValue, { toValue: 1 }).start()

  down = () => Animated.spring(this.state.animatedValue, { toValue: 0 }).start()

  shake = () => {
    Animated.sequence([
      Animated.timing(this.state.animatedValue, { toValue: 1, duration: 150 }),
      Animated.timing(this.state.animatedValue, { toValue: 0, duration: 150 }),
      Animated.timing(this.state.animatedValue, {
        toValue: 0.5,
        duration: 150,
      }),
    ]).start()
  }

  toggle = () => {
    let intervalId = null

    if (this.state.intervalId) {
      clearInterval(this.state.intervalId)
    } else {
      intervalId = setInterval(this.shake, 300)
    }

    this.setState(s => ({ intervalId }))
  }

  render() {
    const { animatedValue } = this.state

    return (
      <div>
        <Animated.div
          {...this.props}
          style={{
            display: "flex",
            transform: [
              {
                rotate: animatedValue.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: ["-5deg", "0deg", "5deg"],
                }),
              },
            ],
          }}
          onClick={this.toggle}
        >
          {this.props.children}
        </Animated.div>
      </div>
    )
  }
}
