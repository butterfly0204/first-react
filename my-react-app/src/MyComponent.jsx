import {useState} from "react"
 

function MyComponent(){
    const [name, setName] = useState( "baby Girl")
    const [Age, setAge] =useState(0)
    return(
    <>
    <h2>{name}</h2>
    <button onClick={() =>setName("Favour")}>My Real name</button>

    <h2>{Age}</h2>
    <button onClick={() =>setAge("23")}>My Real name</button>
    
    </>
    )
}

export default MyComponent