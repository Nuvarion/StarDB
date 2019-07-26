import React, {Component} from 'react';

import Header from '../Header';
import RandomPlanet from '../Random-planet';
import PeoplePage from '../People-page';
import SwapiService from '../../services/Swapi-services';
import ItemList from '../Item-list';
import PersonDetails from '../Person-details';
import ErrorIndicator from '../Error-indicator';

import './App.css';


export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        hasError: false
    }

    componentDidCatch(error, info) {
        this.setState({ 
            hasError: true 
        });
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <div>
                <Header />

                <RandomPlanet />
                <PeoplePage />
                <div className='row mb-3'>
                    <div className='col-6'>
                        <ItemList 
                            onPersonSelected={this.onPersonSelected} 
                            getData={this.swapiService.getAllPlanets} 
                            renderItems={({ name }) => (<span>{name}<button>!</button></span>)}/>
                    </div>
                    <div className='col-6'>
                        <PersonDetails 
                            personId={this.state.selectedPerson} />
                    </div>
                </div> 
                <div className='row mb-3'>
                    <div className='col-6'>
                        <ItemList 
                            onPersonSelected={this.onPersonSelected} 
                            getData={this.swapiService.getAllStarships} 
                            renderItems={(item) => item.name}/>
                    </div>
                    <div className='col-6'>
                        <PersonDetails 
                            personId={this.state.selectedPerson} />
                    </div>
                </div>   
            </div>
        );
    }
}

