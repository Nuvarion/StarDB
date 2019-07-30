import React, {Component} from 'react';

import SwapiService from '../../services/Swapi-services';
import Spinner from '../Spinner';
import ErrorIndicator from '../Error-indicator';
// import ItemView from '../Item-view';

import './Item-details.css';

export default class ItemDetails extends Component {

    swapiService = new SwapiService();
  
    state = {
      image: null,
      item: null,
      loading: false,
      error: false
    };
  
    componentDidMount() {
      this.updateItem();
    };
  
    componentDidUpdate(prevProps) {
      if (this.props.itemId !== prevProps.itemId) {
        this.updateItem();
      }
    };
  
    updateItem() {
      const { itemId, getData, getImageUrl } = this.props;
      if (!itemId) {
        return;
      }

      this.setState({ loading: true, error: false })
  
      getData(itemId)
        .then((item) => {
          this.setState({ 
            item, 
            loading: false,
            image: getImageUrl(item)});
        })
        .catch(() => {
          this.setState({ error: true, loading: false })
        });
    };
  
    render() {
  
      const { loading, error, image, item } = this.state;

      if (!item) {
        return <Spinner />
      }
      
      const { name } = item;

      const itemView = (
        <React.Fragment>
          <div className='img'>
                <img className='item-image' alt='item'
                    src={ image } />
            </div>
            
            <div className='card-body'>
                <h4>{ name }</h4>
                <ul className='list-group list-group-flush'>
                    { 
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, { item });
                        })
                     }
                </ul>
            </div>
        </React.Fragment>
      );

      const hasData = !(loading || error);
      const errorMessage = error ? <ErrorIndicator /> : null;
      const spinner = loading ? <Spinner /> : null;
      const content = hasData ? itemView : null;            
  
      return (
        <div className="item-details card">
          {errorMessage}
          {spinner}
          {content}
        </div>
      )
    }
  }
  