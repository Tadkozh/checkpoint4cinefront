import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
                  <li>{movie.title}</li>
            ))
          : 'Chargement...'
          
      }
    </ul>
  )};

export default AuthorsMovies;
