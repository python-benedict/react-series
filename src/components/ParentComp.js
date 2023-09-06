import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

export class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         names : 'benedict'
      }
    }

    componentDidMount = () =>{
        setInterval(()=>{
            this.setState({
                names: 'Benedict'
            })
        }, 4000)
    }

  render() {
    console.log('*****Parent Component********')
    return (
      <React.Fragment>
        <MemoComp names={this.state.names}></MemoComp>
        {/* Parent Comp */}
        {/* <RegComp names={this.state.names}></RegComp> */}
        {/* <PureComp names={this.state.names}></PureComp> */}
      </React.Fragment>
    )
  }
}

export default ParentComp