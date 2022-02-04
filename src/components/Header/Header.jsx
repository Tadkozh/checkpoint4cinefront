import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Header.css';

const Header = ({ linkTo, backTo, title }) => (
  <header className="header">
    <Link to={linkTo}>
      <button type="button" className="header-return">
        {backTo}
      </button>
    </Link>
    <h1>{title}</h1>
  </header>
);

Header.propTypes = {
  linkTo: PropTypes.string.isRequired,
  backTo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;

