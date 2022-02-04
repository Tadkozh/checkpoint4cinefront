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
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ul>
      {
        authmov 
          ? authmov.map((movie) => (
                  <div><Link to={`/film/${movie.id}`}><li>{movie.title}</li></Link></div>
            ))
          : 'Chargement...'
          
      }
    </ul>
  )};

export default AuthorsMovies;
