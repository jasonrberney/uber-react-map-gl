import React, {Component} from 'react'

class AddLayerButton extends Component {
    render() {
        return (
            <button onClick={this.props.onClick}>
                Add Source and Layer
            </button>
        )
    }
}

export default AddLayerButton
