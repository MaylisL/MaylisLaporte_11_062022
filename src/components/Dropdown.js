import { useState } from 'react'
import Vectorclosearrow  from '../assets/Vectorclosearrow.svg'
import Vectoropenarrow  from '../assets/Vectoropenarrow.svg'
import './dropdown.css'

export default function Dropdown(props) {
    const [isDropdownOpen, setIsDropdownOpen ] = useState(false)

    function toggleIsDropdownOpen() {
        setIsDropdownOpen(!isDropdownOpen);
    }
    
    return (
    <div className='dropdownBox'>
        <div className="close" onClick={toggleIsDropdownOpen} aria-expanded={isDropdownOpen ? true : false}>
            <p className='dropdownName'>{props.title}</p>
            <img src={Vectorclosearrow} alt="arrowclose" className={ isDropdownOpen ? "arrow" : "hidden"}/> 
            <img src={Vectoropenarrow} alt="arrowopen" className={ isDropdownOpen ? "hidden" : "arrow"}/> 
        </div>
        <div className={isDropdownOpen ? "showContent" : "hidden"}>
            {typeof props.content === 'string' ? 
            <p className='content'>{props.content}</p>
            : <ul className='content'>{props.content.map((element, index) => <li key={index}>{element}</li>)}</ul> }
        </div>
    </div>)
}