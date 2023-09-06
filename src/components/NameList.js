import React from 'react'

function NameList() {
   const names = ['Benedict', 'Osei', 'Sefa']
  return (
    <div>
        {
            names.map(x => <h2>{x}</h2>)
        }
    </div>
  )
}

export default NameList