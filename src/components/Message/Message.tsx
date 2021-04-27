import React from 'react'
import classNames from 'classnames'

import './Message.scss'
import { messagesType } from '../types/types'

export const Message: React.FC<messagesType> = (props) => {
  const {
    text,
    author,
    handleDeleteMessage,
    id,
  } = props
  const classes = classNames('message', {
    'message-sender': author !== 'Bot',
    'message-bot': author === 'Bot',
  })

  return (
    <div className={classes}>
      {text}
      -
      <b className="message-author">{author}</b>
      <button onClick={() => handleDeleteMessage(id)}>Удалить</button>
    </div>
  )
}
