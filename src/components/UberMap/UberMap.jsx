import React, { Component } from 'react'
import ReactMapGL from 'react-map-gl'
import {connect} from 'react-redux'
import {updateLatLng, addReactMapGLStyle} from '../../redux/reducers/uberMap.jsx'
import {dispatch} from 'redux'
import ChangeLatLngButton from '../ChangeLatLngButton/ChangeLatLngButton.jsx'
import AddLayerButtonContainer from '../../containers/AddLayerButtonContainer/AddLayerButtonContainer.jsx'


class UberMap extends Component {
    constructor(props) {
        super(props)
        this._onViewportChange = this._onViewportChange.bind(this);
    }

    // componentDidMount () {
    //     this.props.dispatch(addReactMapGLStyle(style))
    // }

    _onViewportChange(event) {
        this.props.dispatch(updateLatLng(event.latitude, event.longitude))
    }

    render() {
        console.log(this.props.mapState)
        return (
            <ReactMapGL
                mapStyle={this.props.mapState.style}
                {...this.props.mapState.viewport}
                onViewportChange={this._onViewportChange}
                mapboxApiAccessToken={process.env.MAPBOXACCESSTOKEN}
            >
                <ChangeLatLngButton/>
                <AddLayerButtonContainer/>
            </ReactMapGL>
        )
    }
}

const mapStateToProps = state => {
  return {
    mapState: state
  }
}
export default connect(mapStateToProps)(UberMap)
