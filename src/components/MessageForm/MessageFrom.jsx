import React from 'react'
import { Fab, TextField } from '@material-ui/core'
import { Send } from '@material-ui/icons'

export class MessageForm extends React.Component{
  state = {
    author: '',
    text: ''
  }

  handlerKeyDown = (event) => {
    if(event.key === 'Enter' && event.ctrlKey){
      this.handleMessageSend()
    }
  }

  handleInputChange = (event) => {
    const fieldName = event.target.name
    this.setState({[fieldName]: event.target.value})
  }

  handleMessageSend = () => {
    const {author, text} = this.state
    if(!author){
      alert('Enter name')
      return
    }
    if(!text){
      alert('Enter text')
      return
    }
    this.setState({text: ''})
    this.props.onSend(this.state)
  }

  render(){
    const {author, text} = this.state

    return (
      <>
        <div>
          <TextField
            label="Name"
            name="author"
            type="text"
            value={author}
            onChange={this.handleInputChange}
            onKeyDown={this.handlerKeyDown}
          />
          <TextField
            name="text"
            label="Text"
            value={text}
            multiline
            onChange={this.handleInputChange}
            onKeyDown={this.handlerKeyDown}
          />
          <Fab variant="round" color="primary" onClick={this.handleMessageSend}>
            <Send />
          </Fab>
        </div>
      </>
    )
  }
}