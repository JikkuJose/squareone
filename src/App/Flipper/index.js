import React from "react"

class Flipper extends React.Component {
  state = {
    shouldShowBox: true,
  }

  toggleBox = () => {
    this.setState({
      shouldShowBox: !this.state.shouldShowBox,
    })
  }

  render() {
    return (
      <div className="pa2">
        <button className="" onClick={this.toggleBox}>
          toggle
        </button>
        {this.state.shouldShowBox && <div className="debug" />}
      </div>
    )
  }
}

export default Flipper
