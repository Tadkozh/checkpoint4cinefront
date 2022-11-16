import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
// import MoviesAuthor from '../MoviesAuthor/MoviesAuthor';
import './MoviesList.css';

const MoviesList = () => {
  const [movies, setMovies] = useState();
  const [wordEntered, setWordEntered] = useState('');
  
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

  const removeAccents = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  }
  // https://ricardometring.com/javascript-replace-special-characters

  const handleFilter = (event) => {
    const searchWord = removeAccents(event.target.value.toLowerCase());
    setWordEntered(searchWord);

    const newFilter = movies.filter(
      (movie) => removeAccents(movie.title).toLowerCase().includes(searchWord)
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

  // function handleClick(e) {
  //   e.preventDefault();
  //   console.log('Le lien a été cliqué.');
  // }
  
  return (
    <main className='main'>
    <Header linkTo='/' backTo='&lt;' title='Films' />

      <section className='search'>
        <div className='searchInputs'>
          <input
            type='text'
            placeholder='Rechercher un film'
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
              <article className='u-cont-info' key={movie.id}> {/* Evite le message Warning: Each Child in a List Should Have a Unique 'key' Prop */}
                  {/* <span className='u-info'>{movie.id}</span> */}
                  <p className='u-trademark'>{movie.title}</p>
                  <p className='u-infop'>{movie.year}</p>
                  <img className='photo' src={movie.photoMovUrl} alt='cinéma'/>
                  <div className='btn-container'>
                    <div className='btn-link'><Link to={`/film/${movie.id}`}>Détails</Link></div>
                    <div className='btn-link'><Link to={`/cineaste/${movie.authorId}`}>Auteur</Link></div>
                  </div>             
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
