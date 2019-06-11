import React, { Component } from 'react';

export default class AddItem extends Component {

    state = {
        label: ''
    }


    onLabelChange = (e) => {

        this.setState(
            {label: e.target.value}
        )
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        })
    }

    render() {
        return (
            <form className="addWrapper" onSubmit={this.onSubmit}>
                <input type="text" onChange={this.onLabelChange} placeholder="What needs to be done" value={this.state.label}/>
                <button>Add</button>
            </form>
        )
    }
}
