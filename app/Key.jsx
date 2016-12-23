import React, { PropTypes } from 'react';
import Sound from 'Sound';

const classnames = require('classnames');

export default class Key extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };

    this.pressKey = this.pressKey.bind(this);
    this.releaseKey = this.releaseKey.bind(this);
  }

  getClassNames() {
    return classnames('key', { active: this.state.active });
  }

  releaseKey() {
    this.setState({
      active: false,
    });
  }

  pressKey() {
    this.setState({
      active: true,
    });
  }

  render() {
    const classNames = this.getClassNames();
    return (
      <div className={classNames} onMouseDown={this.pressKey} onMouseUp={this.releaseKey}>
        {this.props.label}
        <Sound tone={this.props.tone} isPlaying={this.state.active} />
      </div>);
  }
}

Key.propTypes = {
  label: PropTypes.string.isRequired,
  tone: PropTypes.string.isRequired,
};
