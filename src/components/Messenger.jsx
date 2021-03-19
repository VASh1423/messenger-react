import React from 'react'
import { MessageForm } from './MessageFrom'
import { MessageList } from './MessageList'

export class Messenger extends React.Component{
  state = {
    author: 'author',
    message: ['Hello', 'Hi', 'Hallo', 'Hola']
  }

  handleMessageSend = (message) => {
    this.setState({
      author: message.author,
      message: this.state.message.concat([message.text])
    })
  }

  render(){
    const {author, message} = this.state
    return (
      <>
        <MessageList items={message} author={author}/>
        <MessageForm onSend={this.handleMessageSend}/>
      </>
    )
  }
}