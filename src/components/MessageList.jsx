import React from 'react'
import { Message } from './Message'

export const MessageList = (props) => {
  return props.items.map((item, index) => (<Message text={item.text} author={item.author} key={index} />))
}