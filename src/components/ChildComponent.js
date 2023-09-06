import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick={()=>props.greetHandler('child', 'Emmanuel', 'Kofi Boateng')}>Greet Mother</button>
    </div>
  )
}

export default ChildComponent