import React from 'react';

export class AddShipForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {entry: 'Add a ship here'}
    }

    handleInput(event) { 
        this.setState ({
             entry: event.target.value 
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addShip(this.state.entry); 
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input 
                    onChange={this.handleInput.bind(this)}
                    placeholder={this.state.entry}
                />
                <button>Add a Ship!</button>
            </form>
        )
    }
}