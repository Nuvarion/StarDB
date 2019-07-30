import React, {Component} from 'react';

import { StarshipDetails, StarshipList } from '../sw-component';
import Row from '../Row';

export default class StarshipPage extends Component {

    state = {
        selectedItem: 9
    };

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem });
    };

    render() {

        const { selectedItem } = this.state;

        return (
            <Row
                left={<StarshipList onItemSelected={this.onItemSelected} />}
                right={<StarshipDetails itemId={selectedItem} />} />
        );
    }
}
