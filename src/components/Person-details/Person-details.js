import React, {Component} from 'react';

import SwapiService from '../../services/Swapi-services';
import Spinner from '../Spinner';
import ErrorIndicator from '../Error-indicator';

import './Person-details.css';

export default class PersonDetails extends Component {

    swapiService = new SwapiService();

    state = {
        person: null,
        loading: false,
        error: false,
    };

    componentDidMount() {
        this.updatePerson();
    };

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.props !== nextProps
    // };
    
    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    };

    updatePerson() {
        const { personId } = this.props;
        if (!personId) {
            return;
        }

        this.setState({ loading: true, error: false })

        this.swapiService
            .getPerson(personId)
            .then((person) => { 
                this.setState({ person, loading: false });
            })
            .catch(() => {
                this.setState({ error: true, loading: false,  })
            })
    };

    render() {

        const { loading, person, error } = this.state;

        if (!this.state.person) {
            return <Spinner />
        }

        const hasData = !(loading || error)
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PersonView person={person}/> : null;

        return (
            <div className='person-details card'>
                {spinner}
                {content}
            </div>
        );
    };
};

const PersonView = ( {person} ) => {

    const { id, name, gender, birthYear, eyeColor } = person;

    return (
        <React.Fragment>
            <img className='person-image'
                src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

            <div className='card-body'>
                <h4>{name}</h4>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <span className='term'>Gender: </span>
                        <span>{gender}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Birth Year: </span>
                        <span>{birthYear}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Eye Color: </span>
                        <span>{eyeColor}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}


