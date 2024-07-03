import React, { Component } from 'react'
import { getGroqChatCompletion } from '../Tools/aiTools'
import { AwesomeButton } from 'react-awesome-button';
import ReactMarkdown from 'react-markdown'
import 'react-awesome-button/dist/styles.css';

class RequestAndResponse extends Component {

    constructor(props) {
        super(props)
        this.state = {
            response: '',
            userInput: '',
            isClicked: false
        }
    }

    response = (userInput = '') => {
        getGroqChatCompletion(userInput).then((res) => {
            this.setState({
                response: res.choices[0].message.content
            })
        })
    }

    click = (e) => {
        if (e.key === "Enter") {
            this.response(this.state.userInput)
        }
    }

    change = (event) => {
        const newValue = event.target.value
        this.setState({
            userInput: newValue
        })
    }

    render() {
        return (
            <div className="container">
                <div className="user-input-cover">
                        <div className="td">
                            <input className='user-input' type="text" onKeyDown={this.click} onChange={this.change} value={this.state.val} placeholder="I like music, art, and literature..." required/>
                        </div>
                </div>
                    <AwesomeButton className='genButton' type='secondary' onPress={() => {this.response(this.state.userInput)}}>Generate Ideas</AwesomeButton>
                { this.state.response ?
                    <div className="response-cover">
                        <p>
                            <ReactMarkdown>{this.state.response}</ReactMarkdown>
                        </p>
                    </div>
                    :
                    null
                }
            </div>
        )   
    }
}

export default RequestAndResponse;