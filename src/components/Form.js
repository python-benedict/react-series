import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username: ''
      }
    }

    formChangeHandler(event){
        this.setState({
            username : event.target.value
        })
    }

  render() {
    return (
      <form>
        <div>
            <label>Username: </label>
            <input type='text' value={this.state.username}  />
        </div>
      </form>
    )
  }
}

export default Form