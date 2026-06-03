

function List(){
    const fruits = ["Apple", "Banana", "berryies", "orange", "Coconut"]
    const listItem = fruits.map((fruit) =>{
        <li>{fruit}</li>

    })
    return(
       <ul>{listItem}</ul>
    )
}
export default List 