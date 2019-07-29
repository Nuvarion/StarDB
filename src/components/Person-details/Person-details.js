import React, {Component} from 'react';

import SwapiService from '../../services/Swapi-services';
import Spinner from '../Spinner';
import ErrorIndicator from '../Error-indicator';
import PersonView from '../Person-view';

import './Person-details.css';

export default class PersonDetails extends Component {

    swapiService = new SwapiService();
  
    state = {
      person: null,
      loading: false,
      error: false
    };
  
    componentDidMount() {
      this.updatePerson();
    }
  
    componentDidUpdate(prevProps) {
      if (this.props.personId !== prevProps.personId) {
        this.updatePerson();
      }
    }
  
    updatePerson() {
      const { personId } = this.props;
      if (!personId) {
        return;
      }

      this.setState({loading: true, error: false})
  
      this.swapiService
        .getPerson(personId)
        .then((person) => {
          this.setState({ person, loading: false });
        })
        .catch(() => {
          this.setState({ error: true, loading: false})
        })

    }
  
    render() {
  
      const { loading, error, person } = this.state;
      if (!person) {
        return <Spinner />
      }

      const hasData = !(loading || error);
      const errorMessage = error ? <ErrorIndicator /> : null;
      const spinner = loading ? <Spinner /> : null;
      const content = hasData ? <PersonView person={ person } /> : null;
  
      return (
        <div className="person-details card">
          {errorMessage}
          {spinner}
          {content}
        </div>
      )
    }
  }
  