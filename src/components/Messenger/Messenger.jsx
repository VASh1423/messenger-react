import React from 'react'
import { MessageForm } from '../MessageForm'
import { MessagesList } from '../MessagesList'
import { nanoid } from 'nanoid'

import './Messenger.css'
import { Grid } from '@material-ui/core'
import { ChatsList } from '../ChatsList'

export class Messenger extends React.Component{
  state = {
    messages: [{
      id: nanoid(),
      author: 'author1',
      text: 'Hello'
    },
    {
      id: nanoid(),
      author: 'author2',
      text: 'Hi'
    }]
  }

  timer = null

  handleMessageSend = (message) => {
    message.id = nanoid()
    this.setState({messages: this.state.messages.concat(message)})
  }

  randomMessage(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

componentDidUpdate() {
    const lastAuthor = this.state.messages[this.state.messages.length - 1].author

    clearTimeout(this.timer)

    const botAnswer = [`Привет, ${lastAuthor}, чем я могу тебе помочь?`, `${lastAuthor}, спроси что-нибудь проще.`, `Очень интересная история, ${lastAuthor}`, `Не согласен с тобой, ${lastAuthor}.`, `Привет, ${lastAuthor}, приятно познакомиться!`, `${lastAuthor}, повтори, пожалуйста.`, `${lastAuthor}, полностью согласен!`, `${lastAuthor}, как дела?`, `${lastAuthor}, погода и правда сегодня хорошая.`, `${lastAuthor}, пока!`,]

    const index = this.randomMessage(1, 10)

    const answer = {
      author: "Bot",
      text: botAnswer[index - 1],
    }

    if(lastAuthor != 'Bot'){
      this.timer = setTimeout(() => {
        this.handleMessageSend(answer)
      }, 3000)
    }
  }

  render(){
    const { messages } = this.state
    return (
      <div className='messenger'>
      <Grid container wrap='nowrap' spacing={2}>
        <Grid xs={3}>
          <ChatsList/>
        </Grid>
        <Grid xs={9}>
        <div className='message-list'>
          <MessagesList items={messages} author={messages}/>
        </div>
        <MessageForm onSend={this.handleMessageSend}/>
        </Grid>
      </Grid>
      </div>
    )
  }
}