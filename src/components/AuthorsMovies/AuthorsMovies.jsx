import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import './AuthorsMovies.css';

const AuthorsMovies = () => {

  const { id } = useParams();
  const [authmov, setAuthmov] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/authors/${id}/movies`);
    setAuthmov(data);
    //console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <p className='film-title'>Films présents dans ce site :</p>
      
      <ul className='films-list'>
        {
          authmov 
            ? authmov.map((movie) => (
                    <div key={movie.id}><Link to={`/film/${movie.id}`}><li className='films-lnk'>{movie.title}</li></Link></div>
              ))
            : 'Pas encore de film pour ce cinéaste'
            
        }
      </ul>
    </>
  )};

export default AuthorsMovies;
