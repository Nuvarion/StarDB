import React, { Component } from 'react';

import Spinner from '../Spinner';
// import ErrorIndicator from '../Error-indicator';

const withData = (View) => {
    return class extends Component {

      state = {
        data: null,
        error: false
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
        this.props.getData()
          .then((data) => {
            this.setState({
              data,
              error: false
            });
          })
          .catch(() => {
              this.setState({ error: true })
          })
      }
      
      render() {
  
        const { data } = this.state;
    
        if (!data) {
          return <Spinner />;
        } 
        // if (!error) {
        //     return <ErrorIndicator />
        // } else {
        return <View { ...this.props } data={ data } />
        // }
      }
    }
  }

export default withData;