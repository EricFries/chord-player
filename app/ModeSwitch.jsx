import React, { PropTypes } from 'react';

export default class ModeSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.handleModeChange = this.handleModeChange.bind(this);
  }

  handleModeChange(e) {
    this.props.onToggle(e.target.value);
  }

  render() {
    return (
      <div>
        <label>Chord</label>
        <input
          type="radio"
          value="chord"
          checked={this.props.mode === 'chord'}
          onChange={this.handleModeChange}
        />
        <label>Keys</label>
        <input
          type="radio"
          value="keys"
          checked={this.props.mode === 'keys'}
          onChange={this.handleModeChange}
        />
      </div>
    );
  }
}

