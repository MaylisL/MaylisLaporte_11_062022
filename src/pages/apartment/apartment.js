import Caroussel from '../../components/Caroussel';
import Dropdown from '../../components/Dropdown';
import DataApartments from '../../data/data-apartments.json'
import { useParams } from 'react-router-dom';
import './apartment.css'
import Rating from '../../components/Rating';
import Tag from '../../components/Tag';
import NotFound from '../notfound/NotFound';

export default function Apartment () {

    const { id } = useParams(); // id is the id from url

    const apartmentData = DataApartments.find(apartment => apartment.id === id) 

    if (apartmentData === undefined) {
        return <NotFound/>
    } // id is not existing so apartment is undefined

    return (
        <main className='apartment'>
            <Caroussel apartment={apartmentData}/>
            <div>
                <div className='apartmentInfo'>
                    <div className='gauche'>
                        <h1 className='apartmentTitle'>{apartmentData.title}</h1>
                        <h2 className='apartmentLocation'>{apartmentData.location}</h2>
                        <div className='tagContainer'>
                           {apartmentData.tags.map((tag, index) => {
                            return (<Tag tagName={tag} key={index}/>)
                           }  )} 
                        </div>
                    </div>
                    <div className='droite'>
                        <div className='profile'>
                            <p className='profileName'>{apartmentData.host.name}</p>
                            <div className='profileContainer'>
                                <img src={apartmentData.host.picture} alt='profilepicture' className='profilePicture'></img>
                            </div>
                        </div>
                        <Rating rating={apartmentData.rating}/>
                    </div>
                </div>
                <div className='apartmentDropdown'>
                    <Dropdown className="description" title='Description' content={apartmentData.description}/>
                    <Dropdown className="equipements" title='Équipements' content={apartmentData.equipments}/>
                </div>
            </div>
        </main>
    )
}