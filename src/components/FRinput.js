import React from 'react'

// function FRinput() {
//   return (
//     <div>
//         <input />
//     </div>
//   )
// }

const FRinput = React.forwardRef((props, ref) =>{
    return(
        <div>
            <input ref={ref} />
        </div>
    )
})

export default FRinput