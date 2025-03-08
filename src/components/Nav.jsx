import { Link } from "react-router-dom"
import "../assets/styles/nav.scss"
export default function Nav() {
  return (
      <nav>
        <Link to="html" className="subject">HTML</Link>
        <Link to="css" className="subject">CSS</Link>
        <Link to="javascript" className="subject">JavaScript</Link>
        <Link to="react" className="subject">React</Link>
        <Link to="headless-cms" className="subject">headless-cms</Link>
      </nav>
  )
}
