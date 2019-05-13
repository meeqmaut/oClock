import React from 'react';
import './ForTask.css'


class ForTask extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            result: ''
        }
    }

    updateInputValue = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    showResult = () => {
        this.setState({
            result: this.state.inputValue.length > 0 ? this.props.taskFunction(this.state.inputValue) : 'Please, enter some value',
            inputValue: ''
        })
    }

    render () {
        return (
            <div className="forTask">
                <h3>{ this.props.taskName }</h3>
                <div>
                    <input type="text" value={this.state.inputValue} onChange={ e => this.updateInputValue(e)}></input>
                    <button onClick={this.showResult}>Submit</button>
                </div>
                <div className="result">
                    <p>Result:</p>
                    <p>{ this.state.result }</p>
                </div>
            </div>
        )
    }
}

export default ForTask;