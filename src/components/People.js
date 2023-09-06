import React from 'react'

function People({prop}) {
  return (
    <div>
        {`Hello, my name is ${prop.names}, I am ${prop.age} years old, and I know ${prop.skill}. Not forgotting that I am also with an ID of ${prop.id}`}
    </div>
  )
}

export default People