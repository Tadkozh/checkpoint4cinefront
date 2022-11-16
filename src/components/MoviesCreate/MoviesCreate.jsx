import React from 'react';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './MoviesCreate.css';

const MoviesCreate = () => {

  const navigator = useNavigate();
  const [errorserv, setErrorserv] = useState(null);

  // const initialValues = {
  //   title: '',
  //   year: '',
  //   duration: '',
  //   country: '',
  //   genre: '',
  //   photoMovUrl: '',
  //   movieUrl: '',
  //   authorId: '',
  //   // Pour éviter le message
  //   // Warning: Failed prop type: The prop `title` is marked as required in `Header`, but its value is `undefined`.
  // }
  
  // Récupérer le liste des auteurs pour le menu déroulant
  const [authors, setAuthors] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/authors`);
    setAuthors(data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const yup = require('yup') 

  // schéma de validation des données avec yup : à harmoniser avec les contraintes DB :
  // https://github.com/Tadkozh/checkpoint4cineback/blob/main/ressources/Film%20Muet%20Checkpoint%204.drawio.png
	const schema = yup
	  .object ({

	    title: yup
	    .string()
	    .max(350)
	    .required("Requis : merci d'entrer le titre du film"),
	
	    year: yup
	    .string()
	    .max(4,"Maximum 4 caractères") //integer
	    .required("Requis : merci d'entrer l'année"),
	
	    duration: yup
	    .string()
	    .max(7)
	    .required("Requis : merci d'entrer la durée"),
	
	    country: yup
	    .string()
	    .max(350)
	    .required("Requis : merci d'entrer le pays"),
	
	    genre: yup
	    .string()
	    .max(350)
	    .required("Requis : merci d'entrer le genre"),
	
	    photoMovUrl: yup
	    .string()
	    .max(350) //vérifier http avec une regex?
	    .required("Requis : merci d'entrer le lien vers une photo"),
	
	    movieUrl: yup
	    .string()
	    .max(350) //vérifier http avec une regex?
	    .required("Requis : merci d'entrer le lien vers une vidéo"),
	
	    authorId: yup
	    .string()
	    .max(250) //integer not null
	    .required("Requis : merci d'entrer l'identifiant du cinéaste'"),
	  })

	const { register, formState: {errors}, handleSubmit} = useForm ({resolver: yupResolver(schema)});

  const onSubmit = (register) => {

    //Ajouter le film dans la DB
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/movies/`, register,
      )
      .then((res) => {
        console.log(res)
        alert('Merci pour ce nouveau film')
        navigator(`/film/${res.data.id}`);
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
            {/* type particulier pour année? */}
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

            {/* <label htmlFor='authorId' className='label-ajout'>id du cinéaste </label>
            <p>S'il n'est pas dans la base, créer sa fiche d'abord</p>
            <p>A terme faire un select</p> 
            <input 
              className='input-ajout' 
              type='text' 
              id='authorId' 
              name='authorId' 
              placeholder='Identifiant du cinéaste'
              {...register('authorId')}
            />
            {errors.authorId && <p id='c-yup'>{errors.authorId.message}</p>} */}

            <label htmlFor='authorId' className='label-ajout'>Cinéaste : </label>
            <select
              className='select-contact' 
              name="authorId"
              {...register('authorId')}
            > 
            <option defaultValue>Choisir un cinéaste</option>
              { authors.map((author) => (
              <option value={author.id} key={author.id}>
              {author.firstname}
              &nbsp;
              {author.lastname}
              </option>
              )) }
            </select>
            {errors.authorId && <p id='c-yup'>{errors.authorId.message}</p>}

            <Link to="/cineaste/creer"><button type="button">S'il n'est pas dans la liste, créer sa fiche d'abord</button></Link>
            

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