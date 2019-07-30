import React from 'react'

import ItemDetails from '../Item-details';
import Record from '../Record';
import { withSwapiService } from '../Hoc-helpers';

const PersonDetails = (props) => {
   
    return (
        <ItemDetails {...props}>
            <Record field='gender' label='Gender' />
            <Record field='eyeColor' label='Eye Color' />
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
};


export default withSwapiService(PersonDetails, mapMethodsToProps);