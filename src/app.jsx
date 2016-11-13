import React from 'react';
import ReactDOM from 'react-dom';
import Tone from 'tone';

import Key from 'Key';
// import chords from 'chords';


class App extends React.Component{
    constructor(props){
        super(props);

        this.playChord = this.playChord.bind(this);
        this.stopChord = this.stopChord.bind(this);
        this.keyboardListener();

        this.state= {
            activeChord: undefined,
            activeSynths: [],
        };
    }

    playChord(e){
        const chords = {
            C: ['c4', 'e4', 'g4'],
        };

        const chordName = e.key
        const chord = chords[chordName]

        console.log(this.state.activeChord);
        console.log(chordName);
        if (this.state.activeChord === chordName){
            return;
        }

        this.setState({activeChord: chordName});

        chord.map(note => {
            let synth = new Tone.Synth().toMaster();
            synth.triggerAttack(note);
        });
        console.log(chord);
    }

    stopChord(){
        const synths = this.state.activeSynths;
        synths.map(synth => {
            synth.triggerRelease();
        });
    }

    keyboardListener(){
        window.addEventListener("keydown", this.playChord, true);
        window.addEventListener("keyup", this.stopChord, true);
    }
    render() {
        return (
            <div>
              <Key label="C" tone="C4"/>
              <Key label="D" tone="D4"/>
              <Key label="E" tone="E4"/>
              <Key label="F" tone="F4"/>
              <Key label="G" tone="G4"/>
              <Key label="A" tone="A4"/>
              <Key label="B" tone="B4"/>
              <Key label="C" tone="C5"/>
            </div>
          );
    }
}

const appContainer = document.getElementById('chord-app');
ReactDOM.render(<App />, appContainer);