import React, { Component } from 'react'

class LayerList extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <ul>
                {this.props.style.map((layer, index) => (
                    <li onClick={this.props.handleClick.bind(null,index)} key={index}>{layer.id}</li>
                ))}
            </ul>
        )
    }
}

export default LayerList
