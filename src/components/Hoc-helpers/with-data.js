import React, { Component } from 'react';

import Spinner from '../Spinner';
// import ErrorIndicator from '../Error-indicator';

const withData = (View, getData) => {
    return class extends Component {

      state = {
        data: null,
        error: false
      };
    
      componentDidMount() {
    
        getData()
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