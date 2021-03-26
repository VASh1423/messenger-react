import React from 'react';

import { ChatItem } from '../ChatItem/ChatItem';
import { ChatForm } from '../ChatFrom/ChatFrom';

export const ChatsList = ({chats, onSend}) => {
  return (
    <>
      <ChatForm onSend={onSend}/>
      {chats.map((chat) => ( <ChatItem chat={chat} key={chat.id}/>))}
    </>
  )
}
