import React from 'react'

function Children1(props) {
  return (
    <div>
        <h1>Hello {props.nickName} - {props.heroName}</h1>
        {props.children}
    </div>
  )
}

export default Children1