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
                itemId={3} 
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
            <RandomPlanet/>
  
            {/* <PeoplePage /> */}

            <Row
                left={personDetails}
                right={starshipDetails} />
  
          </div>
        </ErrorBoundry>
      );
    }
  }