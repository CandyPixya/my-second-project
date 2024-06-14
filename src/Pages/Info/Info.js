import myImg from "../Media/me.jpg"
import email from "../Media/email.png"
function Info() {
  return (
    <div className="info-cont">
      <div className="img-cont">
        <img className="myimg" src={myImg}/>
      </div>
      <div className="info-text">
        <h2>CandyPixya</h2>
        <h4>Frontend Developer</h4>
      </div>
        <a className="btn-cont" href="candypixya@gmail.com">
            <img className="eicon" src={email} />
            <p className="email">Email</p>
        </a>
    </div>
  )
  
}
export default Info