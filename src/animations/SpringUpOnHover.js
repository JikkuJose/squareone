import React from "react"
import PropTypes from 'prop-types'
import Animated from 'animated/lib/targets/react-dom'

export default class SpringUpOnHover extends React.Component {
  state = {
    animatedValue: new Animated.Value(0),
  }

  enlarge = () => Animated.spring(this.state.animatedValue, {toValue: 1}).start()

  shrink = () => Animated.spring(this.state.animatedValue, {toValue: 0}).start()

  render() {
    const { animatedValue } = this.state
    const { scaleTo } = this.props

    return(
      <div>
      <Animated.div
        style={{
          transform: [            
            {
              scale: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [1, scaleTo]
              })
            }
          ]
        }}
        onMouseEnter={this.enlarge}
        onMouseLeave={this.shrink}
      >
        {this.props.children}
      </Animated.div>
      </div>
    )
  }
}

SpringUpOnHover.defaultProps = {
  scaleTo: 1.2
}