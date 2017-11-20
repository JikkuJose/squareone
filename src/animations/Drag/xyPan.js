export default function xyPan(anim, config = {}) {
  return {
    onMouseDown: function(event) {
      !config.constrainY && stopAnimation("Y", anim.y, event, config)
      !config.constrainX && stopAnimation("X", anim.x, event, config)
    },
  }
}

function stopAnimation(dimension, anim, event, config) {
  anim.stopAnimation(startValue => {
    config.onStart && config.onStart()

    let startPosition = event[`client${dimension}`]
    let lastTime = Date.now()
    let lastPosition = event[`client${dimension}`]
    let velocity = 0

    function updateVelocity(event) {
      let now = Date.now()
      if (event[`client${dimension}`] === lastPosition || now === lastTime) {
        return
      }
      velocity = (event[`client${dimension}`] - lastPosition) / (now - lastTime)
      lastTime = now
      lastPosition = event[`client${dimension}`]
    }

    let moveListener, upListener

    window.addEventListener(
      "mousemove",
      (moveListener = event => {
        let value = startValue + (event[`client${dimension}`] - startPosition)
        anim.setValue(value)
        updateVelocity(event)
      })
    )

    window.addEventListener(
      "mouseup",
      (upListener = event => {
        updateVelocity(event)
        window.removeEventListener("mousemove", moveListener)
        window.removeEventListener("mouseup", upListener)
        config.onEnd && config.onEnd({ velocity })
      })
    )
  })
}
