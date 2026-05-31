import PropTypes from "prop-types";

function Student( {Name ="Grace", Age = 0,Student =false}){
    return(
        <div className="student">
            <p>NAME:{Name}</p>
            <p>Age:{Age}</p>
            <p>Student:{Student? "Yes": "NO"} </p>
        </div>

    )

}
Student.PropTypes = {
    Name: PropTypes.string,
    Age: PropTypes.number,
    Student: PropTypes.bool,

}




export default Student