import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    Increament(){
        // this.setState({
        //     count : this.state.count + 1
        // }, ()=>{console.log("Callback Function : ", this.state.count)})

        this.setState(osei=>({
            count: osei.count + 1
        })) 
        console.log(this.state.count)
    }

    IncreamentFive(){
        this.Increament()
        this.Increament()
        this.Increament()
        this.Increament()
        this.Increament()
    }

  render() {
    return (
      <div>
        <h3>Count - {this.state.count}</h3>
        <button onClick={()=>{this.IncreamentFive()}}>Increament</button>
      </div>

    )
  }
}

export default Counter