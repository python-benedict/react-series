import React, {useState, useCallback} from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

function ParentComponent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const IncreaseAge = useCallback(() =>{
        setAge(age + 1)
    }, [age]) 

    const IncreaseSalary = useCallback(() =>{
        setSalary(salary + 1000)
    }) 

  return (
    <div>
        <Title />
        <Count text="Age" count={age} />
        <Button handleClick={IncreaseAge}>Increase Age</Button>
        <Count text="salary" count={salary} />
        <Button handleClick={IncreaseSalary}>Increase Salary</Button>
    </div>
  )
}

export default ParentComponent