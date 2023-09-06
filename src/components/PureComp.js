import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
  render() {
    console.log(' Pure Component ')
    return (
      <div>PureComp {this.props.names}</div>
    )
  }
}

export default PureComp