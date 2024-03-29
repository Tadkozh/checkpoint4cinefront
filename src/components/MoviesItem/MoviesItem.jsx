import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
// import MoviesAuthor from '../MoviesAuthor/MoviesAuthor';
import './MoviesItem.css';

const MoviesItem = ({movieprops}) => {

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
  <main className='main'>
    <Header linkTo="/" backTo="&lt;" title={info.title} />
        <section>
        {
          info
            ?
              <article className='u-cont-info'>
                  <p className='u-infop'>Année : {info.year}</p>
                  <p className='u-infop'>Durée : {info.duration}</p>
                  <p className='u-infop'>Pays : {info.country}</p>
                  <p className='u-infop'>Genre : {info.genre}</p>
                  <img className='photo' src={info.photoMovUrl} alt='cinéma'/>
                 
                  <div className='btn-container'>
                    <div className='btn-link'><a href={info.movieUrl} target='_blank' rel='noreferrer' rel='noopener' >Voir le film</a></div>
                    <div className='btn-link'><Link to={`/cineaste/${info.authorId}`}>Auteur</Link></div>
                    <div className='btn-link'><Link to={`/film/maj/${info.id}`}>maj</Link></div>
                  </div> 
                  {/* <iframe width="95%" src="https://www.youtube.com/embed/v6i3uccnZhQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

                  {/* <MoviesAuthor /> */}
              </article>
            : 'Chargement...'
        }
        </section>
    <Footer />

  </main>
  </>
  )
};

export default MoviesItem;
