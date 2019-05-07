import React from 'react';
import './App.css';
import moment from 'moment';
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
  constructor(props) {
    super(props);
    this.state = {
      date:new Date()
    };
  }
  

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      date: new Date()
    });

  }

  render () {
    return (
      <div className="clock">
        <h1>oClock</h1>
        <h3>{ moment(this.state.date.toLocaleString()).format('MMMM DD, YYYY, h:mm:ss')}</h3>
      </div>
    );
  }
}

export default App;
