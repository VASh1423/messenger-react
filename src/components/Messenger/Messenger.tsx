import React from 'react'

import { MessageForm } from '../MessageForm'
import { MessagesList } from '../MessagesList'

import './Messenger.css'
import { Grid } from '@material-ui/core'
import { ChatsList } from '../ChatsList'
import { messengerType } from '../types/types'

export const Messenger: React.FC<messengerType> = (props) => {
  const {messages, handleMessageSend, chats, handleAddChat, handleDeleteMessage, handleDeleteChat, handleChatUnfire, isLoading, isError} = props

  if(isError){
    return <div>Error</div>
  }

  if(isLoading){
    return <div>Loading...</div>
  }

  return (
    <div className='messenger'>
      <Grid className={'grid-container'} container wrap='nowrap' spacing={2}>
        <Grid className={'chat-list'} item={true} xs={3}>
          <ChatsList chats={chats} onSend={handleAddChat} handleDeleteChat={handleDeleteChat} handleChatUnfire={handleChatUnfire}/>
        </Grid>
        <Grid item={true} xs={9}>
          <div className='message-list'>
          {messages ? (messages.length ? <MessagesList items={messages} handleDeleteMessage={handleDeleteMessage}/>: <div>Пустой чат</div>) : <div>Выберите чат</div>}
          </div>
          {messages && <MessageForm onSend={handleMessageSend}/>}
        </Grid>
      </Grid>
    </div>
  )
}