import axios from 'axios';
import { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './MoviesList.css';

const MoviesList = () => {
  const [movies, setMovies] = useState();
  const [wordEntered, setWordEntered] = useState('');

  const fetchData = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/movies/`);
    setMovies(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
  <main>
    <Header linkTo="/" backTo="&lt;" title="Films" />

      <section className="search">
        <div className="searchInputs">
          <input
            type="text"
            placeholder="Cherchez"
            value={wordEntered}
            onChange={handleFilter}
          />
          <div className="searchIcon">
            {wordEntered.length === 0 ? (
              <SearchIcon />
            ) : (
              <CloseIcon id="clearBtn" onClick={clearInput} />
            )}
          </div>
        </div>
      </section>


      <section className="u-section">
      {
        movies
          ? movies.map((movie) => (
              <article className="u-cont-info">
                  <span className="u-info">{movie.id}</span>
                  <p className="u-trademark">{movie.title}</p>
                  <p className="u-infop">
                    <span>{movie.year}</span>
                    <span className="u-info">{movie.duration}</span>
                  </p>
                    <p className="u-infop">
                      <span>{movie.country}</span>
                      <br />
                      <span>{movie.genre}</span>
                      <img src={movie.photoMovUrl} alt=""/>
                    </p>
                  <p className="u-infop">
                    <span>{movie.movieUrl}</span>
                  </p>
              </article>
            ))
          : 'Chargement...'
      }
    </section>
  </main>
  )
};

export default MoviesList;
