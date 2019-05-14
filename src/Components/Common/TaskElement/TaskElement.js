import React from 'react';
import './TaskElement.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Fade from 'react-bootstrap/Fade';



class ForTask extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            result: '',
            visible: false
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
            inputValue: '',
            visible: true
        })
    }

    render () {
        return (
            <div className="forTask">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>{this.props.taskName}</Form.Label>
                        <Form.Control type="text" value={ this.state.inputValue } onChange={ (e) => this.updateInputValue(e)}/>
                    </Form.Group>
                    <Button variant="success" onClick={this.showResult}>Get</Button>
                </Form>
                <br></br>
                <Fade in={ this.state.visible }>
                    <div className="result">
                        <p>Result:</p>
                        <p>{ this.state.result }</p>
                    </div>
                </Fade>
            </div>
        )
    }
}

export default ForTask;