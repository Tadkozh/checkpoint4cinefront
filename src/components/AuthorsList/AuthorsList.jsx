import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './AuthorsList.css';

const AuthorsList = () => {
  const [authors, setAuthors] = useState();
  const [word, setWord] = useState([]);
  
  //List of items
  const fetchData = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/authors`);
    setAuthors(data);
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
    setWord(searchWord);

    const newFilter = authors.filter(
      (author) => removeAccents(author.firstname).toLowerCase().includes(searchWord) || removeAccents(author.lastname).toLowerCase().includes(searchWord)
    );
    if (searchWord === '') {
      fetchData();
    } else {
      setAuthors(newFilter);
    }
  };

  const clearInput = () => {
    fetchData([]);
    setWord('');
  };
  
  return (
  <main className='main'>
    <Header linkTo='/' backTo='&lt;' title='Cinéastes' />

      <section className='search'>
        <div className='searchInputs'>
          <input
            type='text'
            placeholder='Rechercher un cinéaste'
            value={word}
            onChange={handleFilter}
          />
          <div className='searchIcon'>
            {word.length === 0 ? (
              <SearchIcon />
            ) : (
              <CloseIcon id='clearBtn' onClick={clearInput} />
            )}
          </div>
        </div>
      </section>

      <section className='u-section'>
      {
        authors
          ? authors.map((author) => (
              <article className='u-cont-info' key={author.id}> {/* Evite le message Warning: Each Child in a List Should Have a Unique 'key' Prop */}
                  {/* <span className='u-info'>{author.id}</span> */}
                  <p className='u-trademark'>{author.firstname} {author.lastname}</p>
                  <img className='photo' src={author.photoAutUrl} alt='cinéma'/>
                  <div className='btn-link'><Link to={`/cineaste/${author.id}`}>Détails</Link></div>
              </article>
            ))
          : 'Chargement...'
      }
      </section>

    <Footer />
  </main>
  )
};

export default AuthorsList;