import React, {Component} from 'react';

import Header from '../Header';
import RandomPlanet from '../Random-planet';
import ErrorBoundry from '../Error-boundry';
import SwapiService from '../../services/Swapi-services';
import DummySwapiService from '../../services/dummy-swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';
import { PeoplePage, PlanetPage, StarshipPage }   from '../Pages';

import './App.css';


export default class App extends Component {

    state = {
        swapiService: new SwapiService()
    }


    onServiceChange = () => {
        this.setState(({ swapiService }) => {

            const Service = swapiService instanceof SwapiService ?
                             DummySwapiService : SwapiService;

            return {
                swapiService: new Service()
            }
        });
    };

    render() {
        
      return (
        <ErrorBoundry>
            <SwapiServiceProvider value={this.state.swapiService}>
                <div className="stardb-app">
                    <Header onServiceChange={this.onServiceChange}/>

                    <RandomPlanet/>

                    <PeoplePage />
                    <PlanetPage />
                    <StarshipPage />

                </div>
            </SwapiServiceProvider>
        </ErrorBoundry>
      );
    }
  }