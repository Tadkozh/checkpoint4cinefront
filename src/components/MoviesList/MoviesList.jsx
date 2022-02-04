import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
// import MoviesAuthor from '../MoviesAuthor/MoviesAuthor';
import './MoviesList.css';

const MoviesList = () => {
  const [movies, setMovies] = useState();
  const [wordEntered, setWordEntered] = useState([]);
  
  //List of items
  const fetchData = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/movies`);
    setMovies(data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  //Search bar
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const newFilter = movies.filter(
      (movie) => movie.title.includes(searchWord),
    );
    if (searchWord === '') {
      fetchData();
    } else {
      setMovies(newFilter);
    }
  };

  const clearInput = () => {
    fetchData([]);
    setWordEntered('');
  };
  
  return (
    <main className='main'>
    <Header linkTo='/' backTo='&lt;' title='Films' />

      <section className='search'>
        <div className='searchInputs'>
          <input
            type='text'
            placeholder='Cherchez'
            value={wordEntered}
            onChange={handleFilter}
          />
          <div className='searchIcon'>
            {wordEntered.length === 0 ? (
              <SearchIcon />
            ) : (
              <CloseIcon id='clearBtn' onClick={clearInput} />
            )}
          </div>
        </div>
      </section>

      <section className='u-section'>
      {
        movies
          ? movies.map((movie) => (
              <article className='u-cont-info'>
                  {/* <span className='u-info'>{movie.id}</span> */}
                  <p className='u-trademark'>{movie.title}</p>
                  <p className='u-infop'>{movie.year}</p>
                  <img className='photo' src={movie.photoMovUrl} alt='cinéma'/>
                  {/* <p className='u-infop'>{movie.authorId}</p> */}
                  {/* <p className='u-infop'><Link to=/api/authors/{movies.authorId}>Cinéaste</Link></p> */}
                  {/* <p className='u-infop'><Link to='/api/movies/{movie.Id}'>Détails</Link></p>
                  {/* <MoviesAuthor /> */}
              </article>
            ))
          : 'Chargement...'
      }
      </section>

    <Footer />
  </main>
  )
};

export default MoviesList;
