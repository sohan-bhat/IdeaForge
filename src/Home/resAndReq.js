import React, { Component } from 'react'
import { getGroqChatCompletion } from '../Tools/aiTools'
import { AwesomeButton } from 'react-awesome-button';
import ReactMarkdown from 'react-markdown'
import 'react-awesome-button/dist/styles.css';

class RequestAndResponse extends Component {

    constructor(props) {
        super(props)
        this.state = {
            response: ''
        }
    }

    response = (userInput = '') => {
        getGroqChatCompletion(userInput).then((res) => {
            this.setState({
                response: res.choices[0].message.content
            })
        })
    }

    

    render() {
        return (
            <div className="container">
                <AwesomeButton className='genButton' type='secondary' onPress={() => {this.response()}}>Generate Ideas</AwesomeButton>
                
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