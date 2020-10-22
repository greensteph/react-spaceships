import React, { Component } from 'react';
import { spaceships } from '../../dummyData';
import { SpaceShips } from './SpaceShips';
import { AddShipForm} from './AddShipForm';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ships: spaceships
    };

    this.addShip = this.addShip.bind(this);
  }

  addShip(newShip) {
    let newShipList = this.state.ships.slice();
    newShipList.push({
      name: newShip
    });
    this.setState({ships: newShipList})
  }
  
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h2>Our Ships</h2>
        <AddShipForm onFormSubmit={this.addShip}/> 
        <SpaceShips spaceships={this.state.ships} />
      </div>
    );
  }
}

