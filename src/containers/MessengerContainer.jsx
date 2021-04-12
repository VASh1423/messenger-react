import React from 'react'
import {connect} from 'react-redux'
import { nanoid } from 'nanoid'
import {push} from 'connected-react-router'

import { Messenger } from 'components/Messenger'
import {ChatsLoadAction, ChatsMessageSendAction, ChatsAddAction, ChatsMessageDeleteAction, ChatDeleteAction, ChatUnfireAction} from '../actions/chats'

class MessengerContainerClass extends React.Component{
  componentDidMount(){
    if(!this.props.chats.length){
      this.props.ChatsLoadAction()
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

  handleDeleteMessage = (id) => {
    const {chatId} = this.props
    this.props.ChatsMessageDeleteAction({id, chatId})
  }

  handleDeleteChat = (id) => {
    this.props.ChatDeleteAction({id})
  }

  handleChatUnfire = (id) => {
    this.props.ChatUnfireAction({id})
  }

  render(){
    const {messages, chats, isLoading, isError} = this.props
    return <Messenger 
      messages={messages} 
      handleMessageSend={this.handleMessageSend} 
      chats={chats} 
      handleAddChat={this.handleAddChat}
      handleDeleteMessage={this.handleDeleteMessage}
      handleDeleteChat={this.handleDeleteChat}
      handleChatUnfire={this.handleChatUnfire}
      isLoading={isLoading}
      isError={isError}
    />
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
    chatId: match ? match.params.id : null,
    isLoading: state.chats.loading,
    isError: state.chats.error
  }
}

function mapDispatchToProps(dispatch){
  return {
    ChatsLoadAction: () => dispatch(ChatsLoadAction()),
    ChatsMessageSendAction: (message) => dispatch(ChatsMessageSendAction(message)),
    ChatsAddAction: (title) => dispatch(ChatsAddAction(title)),
    ChatsMessageDeleteAction: (id) => dispatch(ChatsMessageDeleteAction(id)),
    ChatDeleteAction: (id) => dispatch(ChatDeleteAction(id)),
    ChatUnfireAction: (id) => dispatch(ChatUnfireAction(id)),
    redirect: (id) => dispatch(push(`/chat/${id}`))
  }
}

export const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(MessengerContainerClass)