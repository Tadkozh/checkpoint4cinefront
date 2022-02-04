import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import NoPage from './components/NoPage/NoPage';
import MoviesList from './components/MoviesList/MoviesList';
import MoviesItem from './components/MoviesItem/MoviesItem';
import MoviesCreate from './components/MoviesCreate/MoviesCreate';
import MoviesUpdate from './components/MoviesUpdate/MoviesUpdate';
import AuthorsList from './components/AuthorsList/AuthorsList';
import AuthorsItem from './components/AuthorsItem/AuthorsItem';
import AuthorsCreate from './components/AuthorsCreate/AuthorsCreate';
import AuthorsUpdate from './components/AuthorsUpdate/AuthorsUpdate';
import './App.css';

const App = () => (

  <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoPage />} />
            <Route path="films" element={<MoviesList />} />
            <Route path="film/:id" element={<MoviesItem />} />
            <Route path="film/creer" element={<MoviesCreate />} />
            <Route path="film/maj/:id" element={<MoviesUpdate />} />
            <Route path="cineastes" element={<AuthorsList />} />
            <Route path="cineaste/:id" element={<AuthorsItem />} />
            <Route path="cineaste/creer" element={<AuthorsCreate />} />
            <Route path="cineaste/maj/:id" element={<AuthorsUpdate />} />
      
      </Routes>    
    </Router>
  </div>
);

export default App;
