import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addLayer, addSource} from '../../redux/reducers.jsx'
import AddLayerButton from '../../components/AddLayerButton/AddLayerButton.jsx'

class AddLayerButtonContainer extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        const layer = {
            "id": "TEST_landuse_overlay_national_park",
            "type": "fill",
            "source": "test",
            "source-layer": "landuse_overlay",
            "filter": [
                "==",
                "class",
                "national_park"
            ],
            "paint": {
                "fill-color": "#FFFFFF",
                "fill-opacity": 0.75
            },
            "interactive": true,
            "layout": {
                "visibility": 'none'
            }
        }
        const source = {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
        }
        this.props.dispatch(addSource({
            'name': 'test',
            'source': source 
        }))
        this.props.dispatch(addLayer({'layer':layer}))
    }

    render() {
        return (
            <AddLayerButton onClick={this.handleClick} />
        )
    }

}

function mapStateToProps (state) {
    return {
        style: state.style
    }
}

export default connect(mapStateToProps)(AddLayerButtonContainer)
