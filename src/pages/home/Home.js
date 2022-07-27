import './home.css';
import Banner from '../../components/Banner';
import Gallery from '../../components/Gallery';
import DataApartments from '../../data/data-apartments.json'
import bannerImg  from '../../assets/banner-img.png'

function Home() {
  //const DataApartments = infoApartments
  return (
      <main className="home">
        <Banner
          alt=''
          src={bannerImg}
          title='Chez vous, partout et ailleurs'
        />
        <Gallery data={DataApartments}/>
      </main>
  );
}

export default Home;
