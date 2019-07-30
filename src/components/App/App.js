import React, {Component} from 'react';

import Header from '../Header';
import RandomPlanet from '../Random-planet';
// import PeoplePage from '../People-page';
import ErrorBoundry from '../Error-boundry';
import Row from '../Row';
import SwapiService from '../../services/Swapi-services';
// import ItemList from '../Item-list';
import ItemDetails from '../Item-details';
// import ErrorIndicator from '../Error-indicator';
import Record from '../Record';
import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList
} from '../sw-component';


import './App.css';

export default class App extends Component {

    swapiService = new SwapiService()

    render() {
        
        const { getPerson, 
                getStarship,
                getPersonImage,
                getStarshipImage } = this.swapiService;

        const personDetails = (
            <ItemDetails 
                itemId={4} 
                getData={ getPerson }
                getImageUrl={ getPersonImage }>
                <Record field='gender' label='Gender' />
                <Record field='eyeColor' label='Eye Color' />
            </ItemDetails>
        );

        const  starshipDetails = (
            <ItemDetails 
                itemId={5} 
                getData={ getStarship }
                getImageUrl={ getStarshipImage }>
                <Record field='model' label='Model' />
                <Record field='length' label='Length' />
                <Record field='costInCredits' label='Cost' />    
            </ItemDetails>
        );
  
      return (
        <ErrorBoundry>
          <div className="stardb-app">
            <Header />

            <PersonDetails itemId={11} />

            <PlanetDetails itemId={5} />

            <StarshipDetails itemId={9} />

            {/* <RandomPlanet/> */}
  
            {/* <PeoplePage /> */}

            <PersonList />

            <PlanetList />

            <StarshipList />
           

            {/* <PersonDetails /> */}

            {/* <Row
                left={personDetails}
                right={starshipDetails} /> */}
  
          </div>
        </ErrorBoundry>
      );
    }
  }