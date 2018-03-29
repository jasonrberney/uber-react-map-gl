import React, { Component } from 'react'
import UberMap from '../../components/UberMap/UberMap.jsx'
import LayerListContainer from '../LayerListContainer/LayerListContainer.jsx'

class UberMapContainer extends Component {

    render() {
        return (
            <div style={{"display": "flex"}}>
                <UberMap />
                <LayerListContainer />
            </ div>
            // <div></div>
        )
    }
}

export default UberMapContainer