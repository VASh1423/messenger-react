import React from 'react'
import {connect} from 'react-redux'
import { nanoid } from 'nanoid'

import { Messenger } from 'components/Messenger'
import {ChatsLoadAction, ChatsMessageSendAction} from '../actions/chats'

class MessengerContainerClass extends React.Component{
  componentDidMount(){
    this.props.ChatsLoadAction()
  }

  handleMessageSend = (message) => {
    const {chatId} = this.props
    message.id = nanoid()

    this.props.ChatsMessageSendAction({
      ...message,
      chatId
    })
  }

  render(){
    const {messages} = this.props
    return <Messenger messages={messages} handleMessageSend={this.handleMessageSend}/>
  }
}

function mapStateToProps(state, ownProps){
  const chats = state.chats.entries
  const {match} = ownProps

  let messages = null

  if(match && chats[match.params.id]){
    messages = chats[match.params.id].messages
  }
  return {
    messages,
    chatId: match ? match.params.id : null
  }
}

function mapDispatchToProps(dispatch){
  return {
    ChatsLoadAction: () => dispatch(ChatsLoadAction()),
    ChatsMessageSendAction: (message) => dispatch(ChatsMessageSendAction(message)),
  }
}

export const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(MessengerContainerClass)