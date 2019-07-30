import React from 'react';

import ItemDetails from '../Item-details';
import Record from '../Record';
import { withSwapiService } from '../Hoc-helpers';

const PlanetDetails = (props) => {

    return (
        <ItemDetails {...props}>
            <Record field='population' label='Population' />
            <Record field='rotationPeriod' label='Rotation Period' />
            <Record field='diameter' label='Diameter' />    
        </ItemDetails>
    )
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }
};

export default withSwapiService(PlanetDetails, mapMethodsToProps);