import { NavLink } from 'react-router-dom'

export default function Navbar() {
        let active = {
          textDecoration: "underline",
        };
    return (
    <nav className='nav'>
       <NavLink to="/" className='home' style={({ isActive }) =>
              isActive ? active : undefined} >Accueil</NavLink>
       <NavLink to="/About" className='about' style={({ isActive }) =>
              isActive ? active : undefined} >A propos</NavLink>
    </nav>)
}