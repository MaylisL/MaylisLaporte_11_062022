import { Link } from "react-router-dom";
import logo  from '../../assets/LOGO.svg'
import "./header.css"
import Navbar from './Navbar'


export default function Header() {
    return (
    <div className='header'>
        <Link to="/">
            <img src={logo} className='headerLogo' alt="logo"/> 
        </Link>
        <Navbar/>
    </div>
    )
}