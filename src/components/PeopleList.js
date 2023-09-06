import React from 'react'
import People from './People'

function PeopleList() {
    const people = [
        {
            id: 1,
            age: 20,
            skill: 'Vue.js',
            names: 'Benedict'
        },
        {
            id: 2,
            age: 40,
            skill: 'Angular.js',
            names: 'Sefa'
        },
        {
            id: 3,
            age: 30,
            skill: 'React.js',
            names: 'Osei'
        },
    ]
    const pepleList = people.map(p => <People prop={p} />)
  return (
    <div>{pepleList}</div>
  )
}

export default PeopleList