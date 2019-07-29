import React, { Component } from 'react';

import ItemList from '../Item-list';
import ItemDetails from '../Item-details';
import SwapiService from '../../services/Swapi-services';
import Row from '../Row';
import ErrorBoundry from '../Error-boundry';

import './People-page.css';

export default class PeoplePage extends Component {

    swapiService = new SwapiService();
  
    state = {
      selectedPerson: 1
    };
  
    onPersonSelected = (selectedPerson) => {
      this.setState({ selectedPerson });
    };
  
    render() {
  
      const itemList = (
        <ItemList
          onItemSelected={this.onPersonSelected}
          getData={this.swapiService.getAllPeople}>
  
          {(i) => (
            `${i.name} (${i.birthYear})`
          )}
  
        </ItemList>
      );
  
      const personDetails = (
        <ErrorBoundry>
          <ItemDetails personId={this.state.selectedPerson} />
        </ErrorBoundry>
      );
  
      return ( 
        <Row left={itemList} right={personDetails} />
      );
    }
  }