import { Link } from "react-router-dom"
import "./card.css"

export default function Card(props) {
    return (
    <Link to={"apartment/" + props.apartmentId} className="card">
        <img src={props.cover} alt='cover' className="cardImage"></img>
        <h2 className="titleImage">{props.title}</h2>
    </Link>)
}