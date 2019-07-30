import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Header from '../Header';
import RandomPlanet from '../Random-planet';
import ErrorBoundry from '../Error-boundry';
import SwapiService from '../../services/Swapi-services';
import DummySwapiService from '../../services/dummy-swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';
import { 
    PeoplePage, 
    PlanetPage, 
    StarshipPage,
    LoginPage,
    SecretPage }   from '../Pages';
import { StarshipDetails } from '../sw-component';

import './App.css';

export default class App extends Component {

    state = {
        swapiService: new SwapiService(),
        isLoggedIn: false
    };

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        });
    };

    onServiceChange = () => {
        this.setState(({ swapiService }) => {

            const Service = swapiService instanceof SwapiService ?
                             DummySwapiService : SwapiService;

            return {
                swapiService: new Service()
            }
        });
    };

    render() {

        const { isLoggedIn } = this.state;

      return (
        <ErrorBoundry>
            <SwapiServiceProvider value={this.state.swapiService}>
                <Router>
                    <div className="stardb-app">
                        <Header onServiceChange={this.onServiceChange}/>
                        <RandomPlanet />

                        {/* <Switch> */}
                            <Route path='/' render={() => <h2>Welcome to StarDB</h2>} 
                                    exact />
                            <Route path='/people' render={() => <h2>People</h2>} 
                                    exact />
                            <Route path='/planet' render={() => <h2>Planets</h2>} 
                                    exact />
                            <Route path='/starship' render={() => <h2>Starships</h2>} 
                                    exact />
                            <Route path='/people/:id?' component={PeoplePage} />
                            <Route path='/planet' component={PlanetPage} />
                            <Route path='/starship' exact component={StarshipPage} />
                            <Route path='/starship/:id' 
                                    render={ ({ match }) => {
                                        const { id } = match.params;
                                        return <StarshipDetails itemId={id} />
                                    }} />

                            <Route 
                                path='/login' 
                                render={() => (
                                <LoginPage  
                                    isLoggedIn={isLoggedIn}
                                    onLogin={this.onLogin} />
                            )} />

                            <Route
                                path='/secret'
                                render={() => (
                                <SecretPage isLoggedIn={isLoggedIn} />
                            )} />

                            {/* <Route render={() => <h2>Page not found</h2>} />
                        </Switch>        */}

                        {/* <PeoplePage />
                        <PlanetPage />
                        <StarshipPage /> */}
                    </div>
                </Router>
            </SwapiServiceProvider>
        </ErrorBoundry>
      );
    }
  }