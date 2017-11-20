import React from "react"
import Animated from "animated/lib/targets/react-dom"

export default class Chain extends React.Component {
  constructor(props) {
    super(props)

    const anims = React.Children.map(
      this.props.children,
      (_, i) => new Animated.Value(0)
    )

    this.state = {
      anims,
      children: React.Children.toArray(this.props.children),
    }

    this.state.children.forEach((c, i) => {
      if (i === 0) {
        return
      }

      const { anims } = this.state
      Animated.spring(anims[i], { toValue: anims[i - 1] }).start()
    })
  }

  handleMouseEnter = index => () => {
    Animated.timing(this.state.anims[index], {
      toValue: 1,
      duration: 3000,
    }).start()
  }

  handleMouseLeave = index => () => {
    Animated.spring(this.state.anims[index], { toValue: 0 }).start()
  }

  render() {
    const { anims, children } = this.state

    return (
      <div className="flex items-center">
        {anims.map((anim, i) =>
          <Animated.div
            style={{
              transform: [
                {
                  scale: anims[i].interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0.6],
                  }),
                },
                {
                  rotate: anims[i].interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", `${90 + i * 30}deg`],
                  }),
                },
              ],
            }}
            onMouseEnter={i === 0 && this.handleMouseEnter(i)}
            onMouseLeave={i === 0 && this.handleMouseLeave(i)}
          >
            {children[i]}
          </Animated.div>
        )}
      </div>
    )
  }
}
