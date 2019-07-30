import React from 'react';

import './Item-view.css';

const ItemView = ( { item, image } ) => {

    const { name } = item;

    return (

        <React.Fragment>
            <div className='img'>
                <img className='item-image' alt='item'
                    src={image} />
            </div>
            
            <div className='card-body'>
                <h4>{name}</h4>
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
}




export default ItemView;