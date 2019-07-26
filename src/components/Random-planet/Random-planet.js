import React, {Component} from 'react';

import SwapiService from '../../services/Swapi-services';
import Spinner from '../Spinner';
import ErrorIndicator from '../Error-indicator';
import PlanetView from '../Planet-view';

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


