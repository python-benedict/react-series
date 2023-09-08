import React, {useState, useEffect} from 'react'

function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const HandleMouseMove = e =>{
        console.log('handling mouse over')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('updating use effect')
        window.addEventListener('mousemove', HandleMouseMove)
    }, [])

  return (
    <div>
        Hook - X {x} - Y {y} 
    </div>
  )
}

export default HookMouse