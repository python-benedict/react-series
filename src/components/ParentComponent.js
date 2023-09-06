import React, { Component } from 'react'

export class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName : 'Benedict'
      }
    }

    greetParent(){
        alert(`Hello ${this.state.parentName}`)
    }

  render() {
    return (
      <div>ParentComponent</div>
    )
  }
}

export default ParentComponent