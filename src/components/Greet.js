import  React  from "react";

function Greet(props) {
    const {name, heroName} = props
    return <h1>Hello {name} aka {heroName}</h1>
}

export default Greet