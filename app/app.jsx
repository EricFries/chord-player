import React from 'react';
import ReactDOM from 'react-dom';
import Keyboard from 'Keyboard';
import ModeSwitch from 'ModeSwitch'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'keys',
    };
    this.toggleAppMode = this.toggleAppMode.bind(this);
  }

  toggleAppMode(mode) {
    this.setState({
      mode,
    });
  }

  render() {
    return (
      <div>
        <ModeSwitch mode={this.state.mode} onToggle={this.toggleAppMode} />
        <Keyboard mode={this.state.mode} />
      </div>
    );
  }
}

const appContainer = document.getElementById('chord-app');
ReactDOM.render(<App />, appContainer);
