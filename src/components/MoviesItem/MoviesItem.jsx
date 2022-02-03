import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './MoviesItem.css';

const MoviesItem = () => {

  const { id } = useParams();
  const [info, setInfo] = useState([]);

  const fetchInfo = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/movies/${id}`);
    setInfo(data);
    console.log(data);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  console.log(info);

  return (
  <>
    <Header linkTo="/" backTo="&lt;" title={info.title} />
    <main className="nopage-container">
      <div className="nopage-content">
      <section className='u-section'>
      {
        info
          ?
              <article className='u-cont-info'>
                  {/* <span className='u-info'>{movie.id}</span> */}
                  <p className='u-infop'>Année : {info.year}</p>
                  <p className='u-infop'>Durée : {info.duration}</p>
                  <p className='u-infop'>Pays : {info.country}</p>
                  <p className='u-infop'>Genre : {info.genre}</p>
                  <img className='photo' src={info.photoMovUrl} alt='cinéma'/>
                  <button><a href={info.movieUrl} target='_blank' rel='noreferrer' rel='noopener' >Voir le film</a></button>
              </article>
          : 'Chargement...'
      }
    </section>
      </div>
    </main>
    <Footer />
  </>
  )
};

export default MoviesItem;
