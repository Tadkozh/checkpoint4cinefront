import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Header.css';

const Header = ({ linkTo, backTo, title, firstname, lastname }) => (
  <header className="header">
    <Link to={linkTo}>
      <button type="button" className="header-return">
        {backTo}
      </button>
    </Link>
    <h1>{title} {firstname} {lastname}</h1>
  </header>
);

Header.propTypes = {
  linkTo: PropTypes.string.isRequired,
  backTo: PropTypes.string.isRequired,
  title: PropTypes.string,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
};

export default Header;

