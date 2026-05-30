function Student(props){
    return(
        <div className="student">
            <p>NAME:{props.Name}</p>
            <p>Age:{props.Age}</p>
            <p>Student:{props.Student? "Yes": "NO"}</p>
        </div>

    )

}

export default Student