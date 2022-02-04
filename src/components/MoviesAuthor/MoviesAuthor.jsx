import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './MoviesAuthor.css';

const MoviesAuthor = () => {

  const { authorId } = useParams();
  const [movAuth, setMovAuth] = useState();

  const movieAuth = async () => {
    const { inf } = await axios.get(`${process.env.REACT_APP_API_URL}/api/authors/${authorId}`);
    setMovAuth(inf);
    console.log(inf);
  };
  useEffect(() => {
    movieAuth();
  });

  console.log(movAuth);

  return (
    <>
      {
        movAuth
        ?
        <div>  
          <span>{movAuth.firstname}</span>
          <span>{movAuth.lastname}</span>
        </div>
      : 'Chargement...'
          
      }
    </>
  )};

export default MoviesAuthor;
