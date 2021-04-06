import React from 'react';

import { ChatItem } from '../ChatItem';
import { ChatForm } from '../ChatForm';

export const ChatsList = ({chats, onSend, handleDeleteChat, handleChatUnfire}) => {
  return (
    <>
      <ChatForm onSend={onSend}/>
      {chats.map((chat) => ( <ChatItem chat={chat} key={chat.id} id={chat.id} fire={chat.fire} handleDeleteChat={handleDeleteChat} handleChatUnfire={handleChatUnfire}/>))}
    </>
  )
}
