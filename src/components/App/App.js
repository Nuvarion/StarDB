import React, {Component} from 'react';

import Header from '../Header';
import RandomPlanet from '../Random-planet';
import PeoplePage from '../People-page';

import './App.css';

export default class App extends Component {

    render() {

        return (
            <div>
                <Header />

                <RandomPlanet />
                <PeoplePage />
                <PeoplePage />
                <PeoplePage />
            </div>
        );
    }
}

