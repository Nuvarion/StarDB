import React, { Component } from 'react';

import ItemList from '../Item-list';
import PersonDetails from '../Person-details';
import ErrorIndicator from '../Error-indicator';

import './People-page.css';

export default class PeoplePage extends Component {
    state = {
        selectedPerson: 1,
        hasError: false
    };

    componentDidCatch() {
        debugger;
        this.setState({
            hasError: true
        });
    };

    onPersonSelected = (selectedPerson) => {
        this.setState({ selectedPerson });
    };

    

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <div className='row mb-3'>
                <div className='col-6'>
                    <ItemList onPersonSelected={this.onPersonSelected} />
                </div>
                <div className='col-6'>
                    <PersonDetails personId={this.state.selectedPerson} />
                </div>
            </div>
        )
    }
}