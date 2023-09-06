import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comment: '',
         topic: 'select'
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
    handleTopicChange = (event) =>{
        this.setState({
            topic: event.target.value
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
        <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
                <option value="select">Select</option>
                <option value="react">React</option>
                <option value="vue.js">Vue Js</option>
                <option value="angular">Angular</option>
            </select>
        </div>
      </form>
    )
  }
}

export default Form