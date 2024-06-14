import twit from "../Media/twit.png"
import insta from "../Media/insta.png"
import tel from "../Media/tel.png"
import you from "../Media/you.png"
export default function Footer() {
  return (
    <div className="footer">
      <div className="icons">
        <img src={twit} />
        <img src={insta} />
        <img src={tel} />
        <img src={you} />
      </div>
    </div>
  )
}