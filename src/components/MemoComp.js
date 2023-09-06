import React from 'react'

function MemoComp({names}) {
    console.log('rendering memo component')
  return (
    <div>MemoComp {names}</div>
  )
}

export default React.memo(MemoComp)