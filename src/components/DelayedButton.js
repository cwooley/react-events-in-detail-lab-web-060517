// Code DelayedButton Component Here

import React, { PropTypes } from 'react'

class DelayedButton extends React.Component {
  constructor(props){
    super(props)
  }

  render () {
    return(
      <button onClick={this.clicked.bind(this)} />
    )
  }

  clicked = (e) => {
      e.persist()
      setTimeout(()=>{this.props.onDelayedClick(e)}, this.props.delay)
  }

}

export default DelayedButton;
