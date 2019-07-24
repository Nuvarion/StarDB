import React, {Component} from 'react';

import Header from '../Header';
import RandomPlanet from '../Random-planet';
import ItemList from '../Item-list';
import PersonDetails from '../Person-details';

import './App.css';

export default class App extends Component {

    state = {
        showRandomPlanet: true,
        selectedPerson: 6
    };

    // toggleRandomPlanet = () => {
    //     return this.setState({

    //     })
    // }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {

        return (
            <div>
                <Header />

                <RandomPlanet />
                <div className='row mb2'>
                    <div className='col-md-6'>
                        <ItemList onItemSelected={this.onPersonSelected} />
                    </div>
                    <div className='col-md-6'>
                        <PersonDetails personId={this.state.selectedPerson} />
                    </div>
                </div>
            </div>
        );
    }
}

