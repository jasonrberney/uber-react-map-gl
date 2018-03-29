import React, {Component} from 'react'
import {connect} from 'react-redux'
import {dispatch} from 'redux'
import {updateLatLng} from '../../redux/reducers.jsx'


class ChangeLatLngButton extends Component {
    constructor(props) {
        super(props)
        this._onClick = this._onClick.bind(this)
    }

    _onClick(event) {
        let lat = this.props.mapState.viewport.latitude + 5
        let lng = this.props.mapState.viewport.longitude + 5
        this.props.dispatch(updateLatLng(lat, lng))
    }

    render() {
        return (
            <button onClick={this._onClick}>
                Move lat long
            </button>
        )
    }
}

const mapStateToProps = state => {
    return {
        mapState: state
    }
}

export default connect(mapStateToProps)(ChangeLatLngButton)
