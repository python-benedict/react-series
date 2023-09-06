import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comment: ''
      }
    }

    // formChangeHandler(event){
    //     this.setState({
    //         username : event.target.value
    //     })
    // }

    formChangeHandler = (event) =>{
        this.setState({
            username: event.target.value
        })
    }
    handleCommentChange = (event) =>{
        this.setState({
            comment: event.target.value
        })
    }

  render() {
    return (
      <form>
        <div>
            <label>Username: </label>
            <input type='text' value={this.state.username} onChange={this.formChangeHandler} />
        </div>
        <div>
            <label>Comment</label>
            <textarea value={this.state.comment} onChange={this.handleCommentChange}></textarea>
        </div>
      </form>
    )
  }
}

export default Form