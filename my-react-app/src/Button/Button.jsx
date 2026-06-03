import styles from './Button.module.css'

function Button(){
    const handleClick = () =>{
        console.log("ouch")

    }
    const handleClick2 = (name)=>{
        console.log(`${name}, Stop clicking me`)
    }
    return(
        <button className={styles.button} onClick={handleClick2("Favour")}>CLick Me</button>

    )

}


export default Button