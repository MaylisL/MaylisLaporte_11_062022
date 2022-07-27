import "./banner.css"


export default function Banner(props) {
    return (
    <div className='banner'>
        <img src={props.src} className='bannerImg' alt="banner-img"/> 
        {props.title ? <h1 className='bannerTitle'>{props.title}</h1> : ""}
    </div>)
}