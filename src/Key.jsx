import React from 'react';
import Tone from 'tone';
var classnames = require('classnames');

export default class Key extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            active: false,
        };

        this.playTone = this.playTone.bind(this);
        this.stopTone = this.stopTone.bind(this);
    }
    playTone(e) {
        console.log(e.keyCode);
        var synth = new Tone.Synth().toMaster();

        this.setState({
            active: true,
            synth: synth
        });
        
        synth.triggerAttack(this.props.tone);
    }
    stopTone() {
        const synth = this.state.synth;
        synth.triggerRelease();
        this.setState({
            active: false,
        });

    }
    getClassNames() {
        return classnames('key', {'active': this.state.active});
    }
    render() {
        const classNames = this.getClassNames();
        return (
          <div className={classNames} onMouseDown={this.playTone} onMouseUp={this.stopTone}>
            {this.props.label}
          </div>);
    }
}
