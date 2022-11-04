import React from 'react';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './MoviesCreate.css';

const MoviesCreate = () => {

  const navigator = useNavigate();
  const [errorserv, setErrorserv] = useState(null);

  const yup = require('yup') // schéma de validation des données avec yup
	const schema = yup
	  .object ({

	    title: yup
	    .string()
	    .max(50)
	    .required("Requis : merci d'entrer le titre du film"),
	
	    year: yup
	    .string()
	    .max(4,"Maximum 4 caractères")
	    .required("Requis : merci d'entrer l'année"),
	
	    duration: yup
	    .string()
	    .max(255)
	    .required("Requis : merci d'entrer la durée"),
	
	    country: yup
	    .string()
	    .max(255)
	    .required("Requis : merci d'entrer le pays"),
	
	    genre: yup
	    .string()
	    .max(255)
	    .required("Requis : merci d'entrer le genre"),
	
	    photoMovUrl: yup
	    .string()
	    .max(255)
	    .required("Requis : merci d'entrer le lien vers une photo"),
	
	    movieUrl: yup
	    .string()
	    .max(255)
	    .required("Requis : merci d'entrer le lien vers une vidéo"),
	
	    authorId: yup
	    .string()
	    .max(255)
	    .required("Requis : merci d'entrer l'identifiant du cinéaste'"),
	  })

	const { register, formState: {errors}, handleSubmit} = useForm ({resolver: yupResolver(schema)});

  const onSubmit = (register) => {

    //Ajouter le film dans la DB
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/movies/`, register,
      )
      .then(() => {
        alert('Merci pour ce nouveau film')
        navigator('/films');
      })
      .catch(({ response: { data: { message } } }) => {
        setErrorserv (message);
      });
  }

  return (
    <>
      <Header linkTo="/" backTo="&lt;" title="Ajouter un film" />
      <main className="nopage-container">
        <div className="nopage-content">

          <form className='contact-form' onSubmit={handleSubmit(onSubmit)} >
          <div className='form-ajout'>
          
            <label htmlFor='title' className='label-ajout'>Titre : </label>
            <input 
              className='input-ajout' 
              type='text' 
              id='title' 
              name='title' 
              placeholder='Titre du film'
                {...register('title')}
            />
            {errors.title && <p id='c-yup'>{errors.title.message}</p>}
            
            <label htmlFor='year' className='label-ajout'>Année : </label>
            {/* type particuier pour année? */}
            <input 
              className='input-ajout' 
              type='texte' 
              id='year' 
              name='year' 
              placeholder='1895'
              {...register('year')}
            />
            {errors.year && <p id='c-yup'>{errors.year.message}</p>}
            
            <label htmlFor='duration' className='label-ajout'>Durée : </label>
            {/* A terme faire un champs button-ajout et un champs unité */}
            <input 
              className='input-ajout' 
              type='text' 
              id='duration' 
              name='duration' 
              placeholder="N'oubliez pas l'unité. ex : 45 sec"
              {...register('duration')}
            />
            {errors.duration && <p id='c-yup'>{errors.duration.message}</p>}

            <label htmlFor='country' className='label-ajout'>Pays : </label>
            <input 
              className='input-ajout' 
              type='text' 
              id='country' 
              name='country' 
              placeholder='Pays'
              {...register('country')}
            />
            {errors.country && <p id='c-yup'>{errors.country.message}</p>}

            <label htmlFor='genre' className='label-ajout'>Genre : </label>
            {/* A terme faire un <select> */}
            <input 
              className='input-ajout' 
              type='text' 
              id='genre' 
              name='genre' 
              placeholder='genre'
              {...register('genre')}
            />
            {errors.genre && <p id='c-yup'>{errors.genre.message}</p>}

            <label htmlFor='photoMovUrl' className='label-ajout'>Lien vers une photo : </label>
            <input 
              className='input-ajout' 
              type='text' 
              id='photoMovUrl' 
              name='photoMovUrl' 
              placeholder='Photo https://'
              {...register('photoMovUrl')}
            />
            {errors.photoMovUrl && <p id='c-yup'>{errors.photoMovUrl.message}</p>}

            <label htmlFor='movieUrl' className='label-ajout'>Lien vers une vidéo : </label>
            <input 
              className='input-ajout' 
              type='text' 
              id='movieUrl' 
              name='movieUrl' 
              placeholder='Vidéo https://'
              {...register('movieUrl')}
            />
            {errors.movieUrl && <p id='c-yup'>{errors.movieUrl.message}</p>}

            <label htmlFor='authorId' className='label-ajout'>id du cinéaste </label>
            <p>S'il n'est pas dans la base, créer sa fiche d'abord</p>
             {/* A terme faire un <select> */}
            <input 
              className='input-ajout' 
              type='text' 
              id='authorId' 
              name='authorId' 
              placeholder='Identifiant du cinéaste'
              {...register('authorId')}
            />
            {errors.authorId && <p id='c-yup'>{errors.authorId.message}</p>}

            <button className='button-ajout' type='submit' value='Ajouter un film'>Ajouter le film</button>

          </div>
        </form>
        </div>
      </main>
      <Footer />
    </>
  )
};

export default MoviesCreate;