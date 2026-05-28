import profilePic from './assets/mypic.jpg'
function Card(){
    return(
        <div className="card">

        <img src={profilePic} alt="profile picture" className='profile-img'/>
        <h2>Mogaji Favour</h2>
        <p>Software Engineer</p>
        </div>

    )
}


export default Card