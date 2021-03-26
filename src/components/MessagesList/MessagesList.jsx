import React from 'react'
import { Message } from '../Message'

export const MessagesList = (props) => {
  return props.items.map((item) => (<Message text={item.text} author={item.author} key={item.id} />))
}