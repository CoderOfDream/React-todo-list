import React, { Component } from 'react';

export default class TodoListItem extends Component {

    constructor() {
        super();

        this.state = {
            done: false,
        }

        this.onLabelClick = () => {
            this.setState(({ done }) => {
                return {
                    done: !done
                }
            })
        }
    }

    render() {

        // const { label, important = false } = this.props;

        let classNames = 'list-item';

        if (this.state.done) {
            classNames += ' done';
        }

        const style = {
            color: this.props.important ? 'tomato' : 'whitesmoke'
        }

        return (
            <div className={classNames} onClick={this.onLabelClick}>
                <p style={style}>{this.props.label}</p>
                <div className="btn-wrapper">
                    <button onClick={this.props.onDeleted}>Del</button>
                </div>
            </div>
        )
    }
}
