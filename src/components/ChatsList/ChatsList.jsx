import React from 'react';

import { ChatItem } from '../ChatItem';
import { ChatForm } from '../ChatForm';

export const ChatsList = ({chats, onSend, handleDeleteChat}) => {
  return (
    <>
      <ChatForm onSend={onSend}/>
      {chats.map((chat) => ( <ChatItem chat={chat} key={chat.id} id={chat.id} handleDeleteChat={handleDeleteChat}/>))}
    </>
  )
}
