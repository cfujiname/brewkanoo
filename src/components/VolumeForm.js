import React, { Component } from 'react'

export class VolumeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {potVolume: 25};

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({
      potVolume: 30
    })
    console.log(this.state.potVolume)
  }

  render() {
    return (
      <div>
        <form onClick={this.onSubmit}>
          <label>
            Boiling water pot volume:
            <input type="number" name="pot-volume" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default VolumeForm;
