import React, { Component } from 'react';
import { spaceships } from '../../dummyData';
import { SpaceShips } from './SpaceShips';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ships: spaceships
    };

    this.handleSubmitNewSpaceship = this.handleSubmitNewSpaceship.bind(this)
  }

  handleSubmitNewSpaceship(event) {
    this.setState({
      ships: event.target.value
    })
  }
  
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h2>Our Ships</h2>
        <SpaceShips spaceships={this.state.ships} />
      </div>
    );
  }
}

