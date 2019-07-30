import React from 'react'

import ItemDetails from '../Item-details';
import Record from '../Record';
import { withSwapiService } from '../Hoc-helpers';

const PersonDetails = ({ itemId, swapiService }) => {
   
    const { getPerson, getPersonImage } = swapiService;

    return (
        <ItemDetails 
            itemId={itemId} 
            getData={ getPerson }
            getImageUrl={ getPersonImage }>
            <Record field='gender' label='Gender' />
            <Record field='eyeColor' label='Eye Color' />
        </ItemDetails>
    );
};



export default withSwapiService(PersonDetails);