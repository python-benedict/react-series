import React from 'react'

function Title() {
    console.log('Rendering title component')
  return (
    <h2>
        useCallback Hook
    </h2>
  )
}

export default React.memo(Title)