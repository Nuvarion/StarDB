import React from 'react';
import { withRouter } from 'react-router-dom';

import { PersonDetails, PersonList } from '../sw-component';
import Row from '../Row';


const PeoplePage = ({ history, match }) => {

    const { id } = match.params;

    return (
        <Row
            left={<PersonList onItemSelected={(id) => history.push(id)} />}
            right={<PersonDetails itemId={id} />} />
    );
};

export default withRouter(PeoplePage);
