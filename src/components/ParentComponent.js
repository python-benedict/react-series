import React, { Component } from 'react'

export class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName : 'Benedict'
      }
      this.greetParent = this.greetParent.bind(this)
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