import Card  from './Card'
import "./gallery.css"


export default function Gallery(props) {
    return (
    <div className='gallery'>
        {
            props.data.map(apartment => <Card title={apartment.title} cover={apartment.cover} apartmentId={apartment.id} key={apartment.id}/>)
        }
    </div>)
}