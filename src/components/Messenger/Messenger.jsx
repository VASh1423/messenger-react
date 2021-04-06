import React from 'react'

import { MessageForm } from '../MessageForm'
import { MessagesList } from '../MessagesList'

import './Messenger.css'
import { Grid } from '@material-ui/core'
import { ChatsList } from '../ChatsList'

export class Messenger extends React.Component{
  render(){
    const {messages, handleMessageSend, chats, handleAddChat, handleDeleteMessage, handleDeleteChat, handleChatUnfire} = this.props
    return (
      <div className='messenger'>
      <Grid container wrap='nowrap' spacing={2}>
        <Grid item={true} xs={3}>
          <ChatsList chats={chats} onSend={handleAddChat} handleDeleteChat={handleDeleteChat} handleChatUnfire={handleChatUnfire}/>
        </Grid>
        <Grid item={true} xs={9}>
        <div className='message-list'>
        {messages ? (messages.length ? <MessagesList items={messages} author={messages} handleDeleteMessage={handleDeleteMessage}/>: <div>Пустой чат</div>) : <div>Выберите чат</div>}
        </div>
        {messages && <MessageForm onSend={handleMessageSend}/>}
        </Grid>
      </Grid>
      </div>
    )
  }
}