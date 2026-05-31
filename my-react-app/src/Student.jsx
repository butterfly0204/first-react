import PropTypes from "prop-types";

function Student(props){
    return(
        <div className="student">
            <p>NAME:{props.Name}</p>
            <p>Age:{props.Age}</p>
            <p>Student:{props.Student? "Yes": "NO"} </p>
        </div>

    )

}
Student.PropTypes ={
    Name: PropTypes.string,
    Age: PropTypes.number,
    Student: PropTypes.bool

}

export default Student