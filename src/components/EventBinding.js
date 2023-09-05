import React, { Component } from 'react'

class EventBinding extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message : "Hello"
      }
      this.EventHandler = this.EventHandler.bind(this)
    }

    EventHandler(){
        this.setState({
            message : "Goodbye Benedict"
        })
    }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.EventHandler}>Click</button>
      </div>
    )
  }
}

export default EventBinding