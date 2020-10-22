import React from 'react';

export const SpaceShips = (props) => {
    return (
        <ul>
        {props.spaceships.map((ship) => {
            return <li key={ship.id}>{ship.name}</li>
        })}
        </ul>
    )
}

// Example Ship
// {
//     id: 1,
//     name: "SS Anne",
//     color: "blue"
//   },

// remember to pass props in