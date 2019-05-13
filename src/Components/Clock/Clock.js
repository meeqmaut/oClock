import React from 'react';
import moment from 'moment';
import './Clock.css'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
          date:new Date(),
          interval: null
        };
    };
  

    componentDidMount() {
        this.tick();
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.state.interval);
    }

    tick() {
        this.setState({
          date: new Date(),
          interval: requestAnimationFrame(this.tick.bind(this))
        });
    }

    render () {
        return (
        <div className="clock">
            <h1>oClock</h1>
            <h3>{ moment(this.state.date.toLocaleString()).format('MMMM DD, YYYY h:mm:ss')}</h3>
        </div>
        );
    }

}

export default Clock;
