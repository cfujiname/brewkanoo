import React, { Component } from 'react'

export class Equipment extends Component {
    render() {
        return (
            <div className='equipment' style={equipmentStyle}>
                <h2>Equipment:</h2>
                {this.props.equipment.map((equipment) =>(
                    <p> {equipment} <input type="checkbox"></input> </p>))}
            </div>
        )
    }
}

const equipmentStyle = {
    margin: '0',
}

export default Equipment
