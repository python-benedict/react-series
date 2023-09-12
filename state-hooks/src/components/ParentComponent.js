import React, {useState} from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

function ParentComponent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(1000)


  return (
    <div>
        <Title />
        <Count />
        <Button />
    </div>
  )
}

export default ParentComponent