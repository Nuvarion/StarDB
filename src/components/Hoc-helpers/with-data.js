import React, { Component } from 'react';

import Spinner from '../Spinner';
import ErrorIndicator from '../Error-indicator';

const withData = (View) => {
    return class extends Component {

      state = {
        data: null,
        error: false,
        loading: true
      };
    
      componentDidUpdate(prevProps) {
        if (this.props.getData !== prevProps.getData) {
          this.update();
        }
      }

      componentDidMount() {
        this.update();
      }

      update() {

        this.setState( {
          loading: true,
          error: false
        });

        this.props.getData()
          .then((data) => {
            this.setState({
              data,
              loading: false
            });
          })
          .catch(() => {
              this.setState({ 
                error: true,
              loading: false })
          })
      }
      
      render() {
  
        const { data, error, loading } = this.state;
    
        if (loading) {
            return <Spinner />;
        } 
        if (error) {
            return <ErrorIndicator />
        } else {
            return <View { ...this.props } data={ data } />
        }
      }
    }
  }

export default withData;