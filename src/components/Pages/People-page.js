import React, {Component} from 'react';

import { PersonDetails, PersonList } from '../sw-component';
import Row from '../Row';

export default class PeoplePage extends Component {

    state = {
        selectedItem: 1
    };

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem });
    };

    render() {

        const { selectedItem } = this.state;

        return (
            <Row
                left={<PersonList onItemSelected={this.onItemSelected} />}
                right={<PersonDetails itemId={selectedItem} />} />
        );
    }
}
