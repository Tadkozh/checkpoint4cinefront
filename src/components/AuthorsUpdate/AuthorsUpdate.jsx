import React from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './AuthorsUpdate.css';

const AuthorsUpdate = () => {
  return (
  <>
    <Header linkTo="/" backTo="&lt;" title="Modification cinéaste" />
    <main className="nopage-container">
      <div className="nopage-content">
        <div>AuthorsUpdate</div>
      </div>
    </main>
    <Footer />
  </>
  )
};

export default AuthorsUpdate;
