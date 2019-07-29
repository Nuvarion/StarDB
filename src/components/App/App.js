import React, {Component} from 'react';

import Header from '../Header';
import RandomPlanet from '../Random-planet';
import PeoplePage from '../People-page';
import ErrorBoundry from '../Error-boundry';
// import SwapiService from '../../services/Swapi-services';
// import ItemList from '../Item-list';
// import PersonDetails from '../Person-details';
// import ErrorIndicator from '../Error-indicator';

import './App.css';


export default class App extends Component {


    render() {
  
      return (
        <ErrorBoundry>
          <div className="stardb-app">
            <Header />
            <RandomPlanet/>
  
            <PeoplePage />
  
          </div>
        </ErrorBoundry>
      );
    }
  }