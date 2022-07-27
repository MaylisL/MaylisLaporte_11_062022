import './rating.css'
import Vectorstar  from '../assets/Vectorstar.svg'
import Vectorstargrey  from '../assets/Vectorstargrey.svg'


export default function Rating (props) {

    if(props.rating === '1') { 
        return (
            <div className='rating'>
                <img src={Vectorstar} alt=''></img>
                <img src={Vectorstargrey} alt=''></img>
                <img src={Vectorstargrey} alt=''></img>
                <img src={Vectorstargrey} alt=''></img>
                <img src={Vectorstargrey} alt=''></img>
            </div>)
    }
    if(props.rating === '2') { 
        return (
            <div className='rating'>
                <img src={Vectorstar} alt=''></img>
                <img src={Vectorstar} alt=''></img>
                <img src={Vectorstargrey} alt=''></img>
                <img src={Vectorstargrey} alt=''></img>
                <img src={Vectorstargrey} alt=''></img>
            </div>)
    }
    if(props.rating === '3') { 
        return (
            <div className='rating'>
                <img src={Vectorstar} alt=''></img>
                <img src={Vectorstar} alt=''></img>
                <img src={Vectorstar} alt=''></img>
                <img src={Vectorstargrey} alt=''></img>
                <img src={Vectorstargrey} alt=''></img>
            </div>)
    }
    if(props.rating === '4') { 
        return (
            <div className='rating'>
                <img src={Vectorstar} alt=''></img>
                <img src={Vectorstar} alt=''></img>
                <img src={Vectorstar} alt=''></img>
                <img src={Vectorstar} alt=''></img>
                <img src={Vectorstargrey} alt=''></img>
            </div>)
    }
    if(props.rating === '5') { 
        return (
            <div className='rating'>
                <img src={Vectorstar} alt=''></img>
                <img src={Vectorstar} alt=''></img>
                <img src={Vectorstar} alt=''></img>
                <img src={Vectorstar} alt=''></img>
                <img src={Vectorstar} alt=''></img>
            </div>)
    }
}

