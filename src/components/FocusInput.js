import React, { Component } from 'react'
import Input from './Input'

export class FocusInput extends Component {

    constructor(props) {
      super(props)
    
      this.componentRef = React.createRef()
    }

    onclickHandler = () =>{
        this.componentRef = this.componentRef.current.clickHandler()
    }

  render() {
    return (
      <React.Fragment>
        <Input ref={this.componentRef} />
        <button onClick={this.onclickHandler} >Click to focus</button>
      </React.Fragment>
    )
  }
}

export default FocusInput