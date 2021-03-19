import React from 'react'

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

    return(
      <>
        <div>
          <input name='author' type='text' placeholder='Name' value={author} onChange={this.handleInputChange} onKeyDown={this.handlerKeyDown}/>
        </div>
        <div>
          <textarea name='text' placeholder='Text' value={text} onChange={this.handleInputChange} onKeyDown={this.handlerKeyDown}/>
        </div>
        <div>
          <button onClick={this.handleMessageSend}>Send</button>
        </div>
      </>
    )
  }
}