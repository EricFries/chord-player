import React, { PropTypes } from 'react';
import Tone from 'tone';

export default class Sound extends React.Component {
  componentDidMount() {
    this.synth = new Tone.Synth().toMaster();
    this.doImperativeWork();
  }

  componentDidUpdate() {
    this.doImperativeWork();
  }

  doImperativeWork() {
    if (this.props.isPlaying) {
      this.synth.triggerAttack(this.props.tone);
    } else {
      this.synth.triggerRelease();
    }
  }

  render() {
    return null;
  }
}

Sound.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  tone: PropTypes.string.isRequired,
  volume: PropTypes.number,
};
