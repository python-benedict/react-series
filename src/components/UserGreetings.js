import React, { Component } from 'react'

export class UserGreetings extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLogin : false
      }
    }

  render() {
    if(this.state.isLogin){
        return (
            <div>hi pam</div>
        )
    }else{
        return(
            <div>Hello Dauther inlaw</div>
        )
    }
    
  }
//   render() {
//     return (
//         this.state.isLogin ?
//       <div>Hello Benedict</div> :
//       <div>Hi Kwabena Sefa</div>
//     )
//   }
}

export default UserGreetings