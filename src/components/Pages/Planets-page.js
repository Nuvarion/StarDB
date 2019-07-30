import React, {Component} from 'react';

import { PlanetDetails, PlanetList } from '../sw-component';
import Row from '../Row';

export default class PlanetPage extends Component {

    state = {
        selectedItem: 2
    };

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem });
    };

    render() {

        const { selectedItem } = this.state;

        return (
            <Row
                left={<PlanetList onItemSelected={this.onItemSelected} />}
                right={<PlanetDetails itemId={selectedItem} />} />
        );
    }
}
