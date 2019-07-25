import React, {Component} from 'react';

import Header from '../Header';
import RandomPlanet from '../Random-planet';
import PeoplePage from '../People-page';
import ItemList from '../Item-list';
import PersonDetails from '../Person-details';

import './App.css';

export default class App extends Component {

    render() {

        return (
            <div>
                <Header />

                <RandomPlanet />
                <PeoplePage />
                {/* <div className='row mb-3'>
                    <div className='col-6'>
                        <ItemList onPersonSelected={this.onPersonSelected} />
                    </div>
                    <div className='col-6'>
                        <PersonDetails personId={this.state.selectedPerson} />
                    </div>
                </div>    */}
            </div>
        );
    }
}

