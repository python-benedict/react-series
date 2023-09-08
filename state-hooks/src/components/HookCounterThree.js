import React, { useState } from 'react'

function HookCounterThree() {

    const [names, setNames] = useState({firstName: '', lastName: ''})

  return (
    <div>
        <form>
            <input onChange={e => setNames({...names, firstName: e.target.value})} type='text' value={names.firstName} />
            <input onChange={e => setNames({...names, lastName: e.target.value})} type='text' value={names.lastName} />

            <h2>Your First Name is : {names.firstName}</h2>
            <h2>Your Last Name is : {names.lastName}</h2>
            <h2>{JSON.stringify(names)}</h2>
        </form>
    </div>
  )
}

export default HookCounterThree
