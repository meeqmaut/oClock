import React from 'react';
import './ForTask.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



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
        const result = this.state.visible ? <div className="result">
                                                <p>Result:</p>
                                                <p>{ this.state.result }</p>
                                            </div>
                                            : '';
                                            
        return (
            <div className="forTask">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>{this.props.taskName}</Form.Label>
                        <Form.Control type="text" value={ this.state.inputValue } onChange={ (e) => this.updateInputValue(e)}/>
                    </Form.Group>
                    <Button variant="primary" onClick={this.showResult}>Submit</Button>
                </Form>
                <br></br>
                {result}
            </div>
        )
    }
}

export default ForTask;