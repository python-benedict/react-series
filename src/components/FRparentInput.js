import React, { Component } from 'react'
import FRinput from './FRinput'

export class FRparentInput extends Component {

    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }

    clickHandler = () =>{
        this.inputRef.current.focus()
    }

  render() {
    return (
      <React.Fragment>
        <FRinput ref={this.inputRef} />
        <button onClick={this.clickHandler}>Click Me</button>
      </React.Fragment>
    )
  }
}

export default FRparentInput