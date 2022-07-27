
import Vectorprevious  from '../assets/Vectorprevious.svg'
import Vectornext  from '../assets/Vectornext.svg'
import './caroussel.css'
import { useState } from 'react';

export default function Caroussel (props) {

    function numberofpictures() { 
        return props.apartment.pictures.length; 
    }

    const lastImageIndex = numberofpictures() - 1;
    const firstImageIndex = 0;

    let images = props.apartment.pictures
    let [currentTabIndex, setCurrentTabIndex] = useState(0)

    function next() {
        if(currentTabIndex === lastImageIndex) {
            setCurrentTabIndex(0)

        } else {
            setCurrentTabIndex(currentTabIndex + 1)
        }
    }
    function previous() {
        if(currentTabIndex === firstImageIndex) {
            setCurrentTabIndex(lastImageIndex)
        } else {
            setCurrentTabIndex(currentTabIndex - 1)
        }

    }

    return (
    <div className="caroussel">
        <img src={images[currentTabIndex]} alt='' className='carousselImg'></img>
        <img src={Vectorprevious} alt='previous' className='previous' onClick={previous} role='button'></img>
        <img src={Vectornext} alt='next' className='next' onClick={next} role='button'></img>
        <p className='numberofpictures'>{currentTabIndex + 1}/{numberofpictures()}</p>
    </div>
    )
}