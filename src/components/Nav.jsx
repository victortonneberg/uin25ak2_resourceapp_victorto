import { Link, NavLink } from "react-router-dom"
import "../assets/styles/nav.scss"
export default function Nav() {


  return (
    <nav>
      {/*Bruker NavLink for å legge til "active" klasse når lenken er aktiv
      Kilde: https://api.reactrouter.com/v7/functions/react_router.NavLink.html
      */}
      <NavLink to="html" className={({isActive}) => isActive ? "active subject" : "subject"}>HTML</NavLink>
      <NavLink to="css" className={({isActive}) => isActive ? "active subject" : "subject"}>CSS</NavLink>
      <NavLink to="javascript" className={({isActive}) => isActive ? "active subject" : "subject"}>JavaScript</NavLink>
      <NavLink to="react" className={({isActive}) => isActive ? "active subject" : "subject"}>React</NavLink>
      <NavLink to="headless-cms" className={({isActive}) => isActive ? "active subject" : "subject"}>Headless-CMS</NavLink>
    </nav>


  )
}
