import React, { Component } from 'react';

import ItemList from '../Item-list';
import PersonDetails from '../Person-details';
import ErrorIndicator from '../Error-indicator';
import SwapiService from '../../services/Swapi-services';
import Row from '../Row';

import './People-page.css';


export default class PeoplePage extends Component {

    swapiService = new SwapiService();

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

        const itemList = (
            <ItemList 
                    onPersonSelected={this.onPersonSelected} 
                    getData={this.swapiService.getAllPeople}
                    renderItems={({ name, birthYear, gender }) => `${name} (${gender}, ${birthYear})`}/>
        );

        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson} />
        );

        if (this.state.hasError) {
            return <ErrorIndicator />
        };

        return (
            <Row left={itemList} right={personDetails} />
        );
    }
}

