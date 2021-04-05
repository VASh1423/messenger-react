import React from 'react'
import {connect} from 'react-redux'
import { nanoid } from 'nanoid'
import {push} from 'connected-react-router'

import { Messenger } from 'components/Messenger'
import {ChatsLoadAction, ChatsMessageSendAction, ChatsListLoadAction, ChatsAddAction, ChatsMessageDeleteAction} from '../actions/chats'

class MessengerContainerClass extends React.Component{
  componentDidMount(){
    if(!this.props.chats.length){
      this.props.ChatsLoadAction()
      this.props.ChatsListLoadAction()
    }
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
    const {chats, redirect} = this.props
    title.id=chats.length

    this.props.ChatsAddAction({
      ...title,
    })
    redirect(title.id)
  }

  handleDeleteChat = (id) => {
    const {chatId} = this.props
    this.props.ChatsMessageDeleteAction({id, chatId})
  }

  render(){
    const {messages, chats} = this.props
    return <Messenger messages={messages} handleMessageSend={this.handleMessageSend} chats={chats} handleAddChat={this.handleAddChat} handleDeleteChat={this.handleDeleteChat}/>
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
    ChatsAddAction: (title) => dispatch(ChatsAddAction(title)),
    ChatsMessageDeleteAction: (id) => dispatch(ChatsMessageDeleteAction(id)),
    redirect: (id) => dispatch(push(`/chat/${id}`))
  }
}

export const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(MessengerContainerClass)