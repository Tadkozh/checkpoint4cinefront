import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AuthorsMovies from '../AuthorsMovies/AuthorsMovies';
import './AuthorsItem.css';

const AuthorsItem = () => {

  const { id } = useParams();
  const [author, setAuthor] = useState([]);
  
  //List of items
  const fetchData = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/authors/${id}`);
    setAuthor(data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <main className='main'>
    <Header linkTo='/' backTo='&lt;' title={author.lastname} />

      <section className='u-section'>
      {
        author
          ?
            <>
              <article className='u-cont-info'>
                  {/* <span className='u-info'>{author.id}</span> */}
                  <p className='u-trademark'>{author.firstname} {author.lastname}</p>
                  <img className='photo' src={author.photoAutUrl} alt='portrait'/>
                  {/* <p className='u-infop'>{authors.wikipediatUrl}</p> */}
                  
                  <div className='btn-container'>
                    <div className='btn-link'><a href={author.wikipediatUrl} target='_blank' rel='noreferrer noopener' >Voir la fiche Wikipedia</a></div>
                    <div className='btn-link'><Link to={`/cineaste/maj/${author.id}`}>maj</Link></div>
                  </div> 
                  <p className='u-infop'>Films présents dans ce site :</p>
                  <AuthorsMovies />
              </article>
            </>
          : 'Chargement...'
      }
      </section>

    <Footer />
  </main>
  )
};

export default AuthorsItem;
