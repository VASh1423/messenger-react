import React from 'react';

import { ChatItem } from '../ChatItem/ChatItem';
import {chats} from '../../helpers/chatsData'

export const ChatsList = () => {
  return chats.map((chat) => ( <ChatItem chat={chat} key={chat.id}/>))
}
