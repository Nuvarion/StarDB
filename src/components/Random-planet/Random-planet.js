import React, {Component} from 'react';

import SwapiService from '../../services/Swapi-services';
import Spinner from '../Spinner';
import ErrorIndicator from '../Error-indicator';

import './Random-planet.css';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService(); 

    state = {
        planet: null,
        loading: true
    };

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 5000);
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false
        });
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    };

    updatePlanet = () => {

        const id = Math.floor(Math.random()*25 + 3);
        // const id = 2309581
        this.swapiService
        .getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError)
        };

    render() {
        const { planet, loading, error } = this.state;

        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PlanetView planet={ planet } /> : null;

        return (
            <div className='d-flex random-planet jumbotron rounded'>
                { errorMessage }
                { spinner }
                { content }
            </div>
        );
    }
}

const PlanetView = ({ planet }) => {

    const { id, name, population, 
        rotationPeriod, diameter } = planet;

    return (
        <React.Fragment>
            <img className='planet-image' alt='planet'
                        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
                <div>
                    <h4>{name}</h4>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <span className='term'>Population: </span>
                            <span>{population}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Rotation Period: </span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Diameter: </span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
        </React.Fragment>
    );
};
