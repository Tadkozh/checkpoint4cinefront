import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AuthorsMovies from '../AuthorsMovies/AuthorsMovies';
import './AuthorsItem.css';

const AuthorsItem = () => {

  const { id } = useParams();
  const [author, setAuthor] = useState();
  
  //List of items
  const fetchData = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/authors/${id}`);
    setAuthor(data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  });
  
  return (
  <main>
    <Header linkTo='/' backTo='&lt;' title='Nom cinéaste' />

      <section className='u-section'>
      {
        author
          ?
            <>
              <article className='u-cont-info'>
                  <span className='u-info'>{author.id}</span>
                  <p className='u-trademark'>{author.firstname} {author.lastname}</p>
                  <img className='photo' src={author.photoAutUrl} alt='portrait'/>
                  <AuthorsMovies />
                  {/* <p className='u-infop'>{authors.wikipediatUrl}</p> */}
                  <div className='btn-link-a'><a href={author.wikipediatUrl} target='_blank' rel='noreferrer' rel='noopener' >Voir la fiche Wikipedia</a></div>
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