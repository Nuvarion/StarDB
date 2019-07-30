import React from 'react';

import './Header.css';

const Header = ({ onServiceChange }) => {
    return (
      <div className="header d-flex">
        <h3>
          <a href="#/">
            StarDB
          </a>
        </h3>
        <ul className="d-flex">
          <li>
            <a href="#/people">People</a>
          </li>
          <li>
            <a href="#/planets">Planets</a>
          </li>
          <li>
            <a href="#/starships">Starships</a>
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
  