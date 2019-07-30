import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = ({ onServiceChange }) => {
    return (
      <div className="header d-flex">
        <h3>
          <Link to="/">
            StarDB
          </Link>
        </h3>
        <ul className="d-flex">
          <li>
            <Link to='/people/'>People</Link>
          </li>
          <li>
            <Link to='/planet/'>Planets</Link>
          </li>
          <li>
            <Link to='/starship/'>Starships</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/secret'>Secret</Link>
          </li>
          <li>
          <button 
            onClick={ onServiceChange }
            className='btn btn-primary btn-sm change-service'>
            Change Service
          </button>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Header;
  