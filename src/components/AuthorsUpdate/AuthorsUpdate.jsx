import React from 'react';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useForm}  from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './AuthorsUpdate.css';


const AuthorsUpdate = () => {
  const navigator = useNavigate();
  const [errorserv, setErrorserv] = useState(null);

  const { id } = useParams();
  const [author, setAuthor] = useState([]);

  const yup = require('yup')
  const schema = yup
  .object ({

    firstname: yup
    .string()
    .max(350),

    lastname: yup
    .string()
    .max(350),

    photoAutUrl: yup
    .string()
    .max(350),

    wikipediatUrl: yup
    .string()
    .max(350),
  })

  const { register, formState: {errors}, handleSubmit} = useForm ({resolver: yupResolver(schema)});

  //Récupérer les données du cinéaste à mettre à jour

  const fetchData = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/authors/${id}`);
    setAuthor(data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const onSubmit = (register) => {
  //const onSubmit = (register) => {   
    // e.preventDefault();
    // const values = {
    //   firstname,
    //   lastname,
    //   photoAutUrl,
    //   wikipediatUrl,
    // };

    // Modifier l'auteur dans la DB
    axios
      .put(`${process.env.REACT_APP_API_URL}/api/authors/${id}`, register,
      )
      .then(() => {
        alert('Merci pour la correction')
        navigator(`/cineaste/${id}`);
      })
      .catch(({ response: { data: { message } } }) => {
        setErrorserv (message);
      });
  }



  return  (
    <>
      <Header linkTo="/" backTo="&lt;" title="Modification cinéaste" />
      <main className="nopage-container">
        <div className="nopage-content">
          <form className='contact-form' onSubmit={handleSubmit(onSubmit)} >
          <div className='form-ajout'>
          
            <label htmlFor='firstname' className='label-ajout'>Prénom : </label>
            <input 
              className='input-ajout' 
              type='text' 
              id='firstname' 
              name='firstname'
              placeholder={author.firstname}
                {...register('firstname')}
            />
            {errors.firstname && <p id='c-yup'>{errors.firstname.message}</p>}
            
            <label htmlFor='lastname' className='label-ajout'>Nom : </label>
            <input 
              className='input-ajout' 
              type='texte'
              id='lastname'
              name='lastname'
              placeholder={author.lastname}
              {...register('lastname')}
            />
            {errors.lastname && <p id='c-yup'>{errors.lastname.message}</p>}

            <label htmlFor='photoAutUrl' className='label-ajout'>Lien vers une photo : </label>
            <input 
              className='input-ajout' 
              type='text' 
              id='photoAutUrl' 
              name='photoAutUrl' 
              placeholder={author.photoAutUrl}
              {...register('photoAutUrl')}
            />
            {errors.photoAutUrl && <p id='c-yup'>{errors.photoAutUrl.message}</p>}

            <label htmlFor='wikipediatUrl' className='label-ajout'>Lien vers Wikipedia : </label>
            <input 
              className='input-ajout' 
              type='text' 
              id='wikipediatUrl' 
              name='wikipediatUrl'
              placeholder={author.wikipediatUrl}
              {...register('wikipediatUrl')}
            />
            {errors.wikipediatUrl && <p id='c-yup'>{errors.wikipediatUrl.message}</p>}

            <button className='button-ajout' type='submit' value='Ajouter un cinéaste'>Mise à jour du cinéaste</button>

          </div>
        </form>
        </div>
      </main>
      <Footer />
    </>
  )
};

export default AuthorsUpdate;
