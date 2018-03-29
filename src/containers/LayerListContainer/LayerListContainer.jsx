import React, { Component } from 'react'
import LayerList from '../../components/LayerList/LayerList.jsx'
import {connect} from 'react-redux'
import { changeLayerStylePaint} from '../../redux/reducers/uberMap.jsx'

class LayerListContainer extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick (id) {
        let visibilityValue = 'none'
        if (this.props.style.layers[id].layout) {
            let currVisibilityValue = this.props.style.layers[id].layout.visibility
            if (currVisibilityValue === 'none'){
                visibilityValue = 'visible'
            }
        }
        this.props.dispatch(changeLayerStylePaint({
            layerId: id, 
            visibility: visibilityValue
        }))
    }

    render () {
        return this.props.style && this.props.style.layers && <LayerList style={this.props.style.layers} handleClick={this.handleClick}/>
    }
}

function mapStateToProps (state) {
    return {
        style: state.style
    }
}

export default connect(mapStateToProps)(LayerListContainer)
