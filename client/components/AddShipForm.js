import React from 'react';

export class AddShipForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {entry: 'Add a ship here'}
    }

    render() {
        return (
            <form>
                <input 
                    onChange={HANDLE THE INPUT}
                    placeholder={this.state.entry}
                />
                <button>Add a Ship!</button>
            </form>
        )
    }
}