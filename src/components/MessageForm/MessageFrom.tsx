import React, { useState } from 'react'
import { Fab, TextField } from '@material-ui/core'
import { Send } from '@material-ui/icons'
import { messageFormType } from '../types/types'

export const MessageForm: React.FC<messageFormType> = (props) => {
  const [dataForm, setDataForm] = useState({
    author: '',
    text: ''
  })

  const handlerKeyDown = (event: React.KeyboardEvent): void => {
    if(event.key === 'Enter' && event.ctrlKey){
      handleMessageSend()
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setDataForm({
      ...dataForm,
      [event.target.name]: event.target.value
    })
  }

  const handleMessageSend = (): void => {
    const {author, text} = dataForm
    if(!author){
      alert('Enter name')
      return
    }
    if(!text){
      alert('Enter text')
      return
    }
    props.onSend(dataForm)
    setDataForm({...dataForm, text: ''})
  }

  return (
    <>
      <div>
        <TextField
          label="Name"
          name="author"
          type="text"
          value={dataForm.author}
          onChange={handleInputChange}
          onKeyDown={handlerKeyDown}
        />
        <TextField
          name="text"
          label="Text"
          value={dataForm.text}
          multiline
          onChange={handleInputChange}
          onKeyDown={handlerKeyDown}
        />
        <Fab variant="round" color="primary" onClick={handleMessageSend}>
          <Send />
        </Fab>
      </div>
    </>
  )
}