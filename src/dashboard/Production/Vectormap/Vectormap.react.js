import React from 'react';
import { VectorMap } from "react-jvectormap";

import './Vectormap.css';
import 'jvectormap-next/jquery-jvectormap.css';

class Vectormap extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <VectorMap map={'world_mill'}
                       backgroundColor="#3b96ce"
                       ref="map"
                       containerStyle={{
                           width: '100%',
                           height: '218px'
                       }}
                       containerClassName="map"
            />
        );
    }
}

export default Vectormap;