import React from 'react'

function Count({count, text}) {
    console.log(`Rendering ${count}`)
  return (
    <div>
        {text} - {count}
    </div>
  )
}

export default Count