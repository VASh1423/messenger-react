import React from 'react'
import {connect} from 'react-redux'
import { nanoid } from 'nanoid'

import { Messenger } from 'components/Messenger'
import {ChatsLoadAction, ChatsMessageSendAction, ChatsListLoadAction, ChatsAddAction} from '../actions/chats'

class MessengerContainerClass extends React.Component{
  componentDidMount(){
    this.props.ChatsLoadAction()
    this.props.ChatsListLoadAction()
  }

  handleMessageSend = (message) => {
    const {chatId} = this.props
    message.id = nanoid()

    this.props.ChatsMessageSendAction({
      ...message,
      chatId
    })
  }

  handleAddChat = (title) => {
    const {chats} = this.props
    title.id=chats.length

    this.props.ChatsAddAction({
      ...title,
    })
  }

  render(){
    const {messages, chats} = this.props
    return <Messenger messages={messages} handleMessageSend={this.handleMessageSend} chats={chats} handleAddChat={this.handleAddChat}/>
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
    chats,
    messages,
    chatId: match ? match.params.id : null
  }
}

function mapDispatchToProps(dispatch){
  return {
    ChatsLoadAction: () => dispatch(ChatsLoadAction()),
    ChatsMessageSendAction: (message) => dispatch(ChatsMessageSendAction(message)),
    ChatsListLoadAction: () => dispatch(ChatsListLoadAction()),
    ChatsAddAction: (title) => dispatch(ChatsAddAction(title))
  }
}

export const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(MessengerContainerClass)