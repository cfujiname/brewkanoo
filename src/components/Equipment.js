import React, { Component } from 'react'

export class Equipment extends Component {
    render() {
        return (
            <div>
                <h2>Equipment:</h2>
                {this.props.equipment.map((equipment) =>(
                    <p> {equipment} <input type="checkbox"></input> </p>))}
            </div>
        )
    }
}

export default Equipment
