import React, {Component} from 'react';

import SwapiService from '../../services/Swapi-services';
import Spinner from '../Spinner';
import ErrorIndicator from '../Error-indicator';
import PlanetView from '../Planet-view';

import './Random-planet.css';

export default class RandomPlanet extends Component {

    static defaultProps = {
      updateInterval: 10000
    };

    swapiService = new SwapiService();
  
    state = {
      planet: null,
      loading: true
    };
  
    componentDidMount() {
      const { updateInterval } = this.props;
      this.updatePlanet();
      this.interval = setInterval(this.updatePlanet, updateInterval);
    }
  
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
      const id = Math.floor(Math.random()*17) + 2;
      this.swapiService
        .getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError);
    };
  
    render() {
      const { planet, loading, error } = this.state;
  
      const hasData = !(loading || error);
  
      const errorMessage = error ? <ErrorIndicator/> : null;
      const spinner = loading ? <Spinner /> : null;
      const content = hasData ? <PlanetView planet={ planet } /> : null;

      return (
        <div className="random-planet jumbotron rounded">
          {errorMessage}
          {spinner}
          {content}
        </div>
      );
    }
    
  }

