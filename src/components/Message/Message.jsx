import React from 'react'
import classNames from 'classnames'

import './Message.scss'

export const Message = (props) => {
  const {text, author, handleDeleteMessage, id} = props
    const classes = classNames('message', {
      'message-sender': author !== 'Bot',
      'message-bot': author === 'Bot'

    })
    
  return <div className={classes}>{text} - <b className='message-author'>{author}</b><button onClick={() => handleDeleteMessage(id)}>Удалить</button></div>
}