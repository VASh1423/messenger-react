import React from 'react'

import { ChatItem } from '../ChatItem'
import { ChatForm } from '../ChatForm'
import { chatListType, messageType } from '../types/types'

export const ChatsList: React.FC<chatListType> = ({chats, onSend, handleDeleteChat, handleChatUnfire}) => {
  return (
    <>
      <ChatForm onSend={onSend}/>
      {chats.map((chat: messageType) => ( <ChatItem chat={chat} key={chat.id} id={chat.id} fire={chat.fire} handleDeleteChat={handleDeleteChat} handleChatUnfire={handleChatUnfire}/>))}
    </>
  )
}
