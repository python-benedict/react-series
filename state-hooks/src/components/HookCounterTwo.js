import React, { useState } from 'react'

function HookCounterTwo() {
    let initialCount = 0
    const [count, SetCount] = useState(initialCount)

    const IncreamentFive = () =>{
        for (let i = 0; i < 5; i++) {
            SetCount(previousCount=>
                previousCount + 1
            )           
        }
    }

  return (
    <div>
        Count : {count}
        <button onClick={() => SetCount(initialCount)}>Reset Count</button>
        <button onClick={() => SetCount(count + 1)}>Increase Count</button>
        <button onClick={() => SetCount(count - 1)}>Decrease Count</button>
        <button onClick={IncreamentFive}>Increase Count By Five</button>
    </div>
  )
}

export default HookCounterTwo