import React from 'react'
import { Message } from '../Message'

import { messagesType } from '../types/types'

export const MessagesList: React.FC<any> = (props) => {
  return props.items.map((item: messagesType) => (<Message text={item.text} author={item.author} id={item.id}  key={item.id} handleDeleteMessage={props.handleDeleteMessage}/>))
}