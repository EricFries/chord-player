import React from 'react';
import ReactDOM from 'react-dom';
import Tone from 'tone';

import Key from 'Key';
import chords from 'chords';


class App extends React.Component{
    constructor(props){
        super(props);

        this.playChord = this.playChord.bind(this);
        this.stopChord = this.stopChord.bind(this);
        this.keyboardListener();

        this.state= {
            activeChord: undefined,
        };
    }

    getChord(chordName) {
        return chords[chordName]
    }

    playChord(e){
        if (this.state.activeChord){
            return;
        }

        const chordName = e.key;
        const chord = this.getChord(chordName);

        if (!chord || this.state.activeChord === chordName){
            return;
        }

        this.setState({activeChord: chordName});

        chord.map(note => {
            this.refs[note].playTone();
        });
    }

    stopChord(e){
        const chordName = e.key;
        const chord = this.getChord(chordName);
        if (!chord || this.state.activeChord !== chordName){
            return;
        }

        chord.map(note => {
             this.refs[note].stopTone();
        });
        this.setState({activeChord: undefined});
    }

    keyboardListener(){
        window.addEventListener("keydown", this.playChord, true);
        window.addEventListener("keyup", this.stopChord, true);
    }
    render() {
        return (
            <div>
              <Key label="C" ref="C4" tone="C4"/>
              <Key label="D" ref="D4" tone="D4"/>
              <Key label="E" ref="E4" tone="E4"/>
              <Key label="F" ref="F4" tone="F4"/>
              <Key label="G" ref="G4" tone="G4"/>
              <Key label="A" ref="A4" tone="A4"/>
              <Key label="B" ref="B4" tone="B4"/>
              <Key label="C" ref="C5" tone="C5"/>
            </div>
          );
    }
}

const appContainer = document.getElementById('chord-app');
ReactDOM.render(<App />, appContainer);