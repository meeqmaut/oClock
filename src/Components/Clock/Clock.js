import React from 'react';
import moment from 'moment';
import './Clock.css';
import { connect } from 'react-redux';
import tick from '../../Store/actions';

class Clock extends React.Component {
    // constructor(props) {
    //     super(props);
        
    //     this.state = {
    //       date:new Date(),
    //       interval: null
    //     };
    // };
  

    componentDidMount() {
        console.log(this.props)
        this.props.data();
    }

    componentWillUnmount() {
        // cancelAnimationFrame(this.state.interval);
    }



    // tick() {
    //     this.setState({
    //       date: new Date(),
    //       interval: requestAnimationFrame(this.tick.bind(this))
    //     });
    // }

    render () {
        return (
        <div className="clock">
            <h1>TIME NOW</h1>
            <h3>{ moment(this.props.date.toLocaleString()).format('MMMM DD, YYYY h:mm:ss')}</h3>
        </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        date: state.date,
        interval: state.interval
    };
};

const mapDispatchToProps = dispatch => {
    return {
        data: (state) => dispatch(tick(state, state))
    };
};


export default connect(mapStateToProps, mapDispatchToProps) (Clock);
