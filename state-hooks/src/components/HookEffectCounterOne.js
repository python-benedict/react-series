import React, {useState, useEffect} from 'react'

function HookEffectCounterOne() {

    const [count, setCount] = useState(0)
    const [names, setNames] = useState('')
    useEffect(()=>{
        console.log('useEffect -- Updating')
        document.title = `You clicked ${count} times`
    }, [count])
  return (
    <div>
        <input type='text' value={names} onChange={e => setNames(e.target.value)}/>
        <button onClick={()=>{setCount(count + 1)}}>You clicked {count} times</button>
    </div>
  )
}

export default HookEffectCounterOne