import logofooter  from '../assets/Logofooter.svg'
import './footer.css'

export default function Footer() {
    return (
    <div className='footer'>
        <img src={logofooter} className='footerLogo' alt="logo"/> 
        <p className='footerP'>© 2020 Kasa. All rights reserved</p>
    </div>)
}