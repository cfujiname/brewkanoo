import React, { Component } from 'react'

export class Equipment extends Component {
    render() {
        return (
            <div>
                <h2>Equipment:</h2>
                <p>{this.props.equipment.map((equipment) =>(
                    equipment + "\r\n"))}</p>
            </div>
        )
    }
}

export default Equipment
