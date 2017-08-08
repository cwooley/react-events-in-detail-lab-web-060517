// Code CoordinatesButton Component Here

import React, { PropTypes } from 'react'

class CoordinatesButton extends React.Component {
  render () {
    return(
      <button onClick={this.clicked} />
    )
  }

  clicked = (e) => {
    let x = e.clientX
    let y = e.clientY
    this.props.onReceiveCoordinates([x,y])
  }
}

export default CoordinatesButton;
