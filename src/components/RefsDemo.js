import React, { Component } from 'react'

class RefsDemo extends Component {

    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }

    componentDidMount(){
        this.inputRef.current.focus() 
    }

    handleSubmit = () =>{
        alert(this.inputRef.current.value)
    }

  render() {
    return (
      <React.Fragment>
        <input type='text' ref={this.inputRef} />
        <button onClick={this.handleSubmit} >Click</button>
      </React.Fragment>
    )
  }
}

export default RefsDemo