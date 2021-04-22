import React, { useState } from 'react'
import { Fab, TextField } from '@material-ui/core'
import { ControlPoint } from '@material-ui/icons'

import { chatFormType } from '../types/types'

export const ChatForm: React.FC<chatFormType> = ({onSend}) => {
  const [chatName, setChatName] = useState('')

  const addChat = () => {
    if(!chatName.length) return
    const chat = {
      title: chatName,
      messages: []
    }

    onSend(chat)
    setChatName('')
  }

  return (
    <>
      <div>
        <TextField
          label="Name"
          name="author"
          type="text"
          value={chatName}
          onChange={event => setChatName(event.target.value)}
        />
        <Fab variant="round" color="primary">
          <ControlPoint onClick={addChat}/>
        </Fab>
      </div>
    </>
  )
}