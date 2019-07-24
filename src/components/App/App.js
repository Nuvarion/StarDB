import React from 'react';

import Header from '../Header';
import RandomPlanet from '../Random-planet';
import ItemList from '../Item-list';
import PersonDetails from '../Person-details';

import './App.css';

const App = () => {
    return (
        <div>
            <Header />
            <RandomPlanet />

            <div className='row mb2'>
                <div className='col-md-6'>
                    <ItemList />
                </div>
                <div className='col-md-6'>
                    <PersonDetails />
                </div>
            </div>
        </div>
    );
};

export default App;