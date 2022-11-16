import React from 'react';

import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './AuthorsCreate.css';


const AuthorsCreate = () => {

  const navigator = useNavigate();
  const [errorserv, setErrorserv] = useState(null);

  // const initialValues = {
  //   firstname: '',
  //   lastname: '',
  //   photoAutUrl: '',
  //   wikipediatUrl: '',
  // }

  const yup = require('yup')
  
  // schéma de validation des données avec yup : à harmoniser avec les contraintes DB :
  // https://github.com/Tadkozh/checkpoint4cineback/blob/main/ressources/Film%20Muet%20Checkpoint%204.drawio.png
  const schema = yup
    .object ({

      firstname: yup
      .string()
      .max(350)
      .required("Requis : merci d'entrer le nom du cinéaste"),

      lastname: yup
      .string()
      .max(350)
      .required("Requis : merci d'entrer le prénom du cinéaste"),

      photoAutUrl: yup
      .string()
      .max(350)
      .required("Requis : merci d'entrer le lien vers une photo"),

      wikipediatUrl: yup
      .string()
      .max(350)
      .required("Requis : merci d'entrer le lien vers Wikipedia"),
  })

  const { register, formState: {errors}, handleSubmit} = useForm ({resolver: yupResolver(schema)});

  const onSubmit = (register) => {

    //Ajouter le cinéaste dans la DB
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/authors/`, register,
      )
      .then((res) => {
        alert('Merci pour ce nouveau cinéaste')
        navigator(`/cineaste/${res.data.id}`);
      })
      .catch(({ response: { data: { message } } }) => {
        setErrorserv (message);
      });
  }

  return (
    <>
      <Header linkTo="/" backTo="&lt;" title="Nouveau cinéaste" />
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
              placeholder='Prénom du cinéaste'
                {...register('firstname')}
            />
            {errors.firstname && <p id='c-yup'>{errors.firstname.message}</p>}
            
            <label htmlFor='lastname' className='label-ajout'>Nom : </label>
            <input 
              className='input-ajout' 
              type='texte' 
              id='lastname' 
              name='lastname' 
              placeholder='Nom du cinéaste'
              {...register('lastname')}
            />
            {errors.lastname && <p id='c-yup'>{errors.lastname.message}</p>}

            <label htmlFor='photoAutUrl' className='label-ajout'>Lien vers une photo : </label>
            <input 
              className='input-ajout' 
              type='text' 
              id='photoAutUrl' 
              name='photoAutUrl' 
              placeholder='Photo https://'
              {...register('photoAutUrl')}
            />
            {errors.photoAutUrl && <p id='c-yup'>{errors.photoAutUrl.message}</p>}

            <label htmlFor='wikipediatUrl' className='label-ajout'>Lien vers Wikipedia : </label>
            <input 
              className='input-ajout' 
              type='text' 
              id='wikipediatUrl' 
              name='wikipediatUrl' 
              placeholder='Wikipedia https://'
              {...register('wikipediatUrl')}
            />
            {errors.wikipediatUrl && <p id='c-yup'>{errors.wikipediatUrl.message}</p>}

            <button className='button-ajout' type='submit' value='Ajouter un cinéaste'>Ajouter le cinéaste</button>

          </div>
        </form>
        </div>
      </main>
      <Footer />
    </>
  )
};

export default AuthorsCreate;
