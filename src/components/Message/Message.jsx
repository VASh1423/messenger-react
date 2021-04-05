import React from 'react'
import classNames from 'classnames'

import './Message.scss'

export class Message extends React.Component{
  render(){
    const {text, author, handleDeleteChat, id} = this.props
    const classes = classNames('message', {
      'message-sender': author !== 'Bot',
      'message-bot': author === 'Bot'

    })
    return <div className={classes}>{text} - <b className='message-author'>{author}</b><button onClick={() => handleDeleteChat(id)}>Удалить</button></div>
  }
}