import React from 'react';
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div>
        <Clock/>
      </div>
    );
  }
}

class Clock extends React.Component {
  render () {
    return (
      <div class="clock">
        <h1>oClock</h1>
      </div>
    );
  }
}

export default App;
