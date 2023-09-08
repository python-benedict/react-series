import React, { Component } from 'react'

export class ClassCounter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    //   this.countHandler = this.countHandler.bind(this)
    }

    countHandler = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }

  render() {
    const {count} = this.state
    return (
      <div>
        <button onClick={this.countHandler}>Count {count}</button>
      </div>
    )
  }
}

export default ClassCounter