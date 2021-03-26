import React from 'react'
import { nanoid } from 'nanoid'

import { MessageForm } from '../MessageForm'
import { MessagesList } from '../MessagesList'

import './Messenger.css'
import { Grid } from '@material-ui/core'
import { ChatsList } from '../ChatsList'
import {chats} from '../../helpers/chatsData'

export class Messenger extends React.Component{
  state = {
    chats
  }

  timer = null

  handleMessageSend = (message) => {
    const {chats} = this.state
    const {match} = this.props

    message.id = nanoid()

    const chat = chats[match.params.id]
    chat.messages = this.messages.concat([message])
    chats[match.params.id] = chat

    this.setState(chats)
  }

  handleAddChat = (chat) => {
    const {chats} = this.state

    chat.id=chats.length

    this.setState({
      chats: [...chats, chat]
    })
  }

  randomMessage(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

componentDidUpdate() {
    if(!this.messages) return
    if(!this.messages.length) return

    const lastAuthor = this.messages[this.messages.length - 1].author

    clearTimeout(this.timer)

    const botAnswer = [`Привет, ${lastAuthor}, чем я могу тебе помочь?`, `${lastAuthor}, спроси что-нибудь проще.`, `Очень интересная история, ${lastAuthor}`, `Не согласен с тобой, ${lastAuthor}.`, `Привет, ${lastAuthor}, приятно познакомиться!`, `${lastAuthor}, повтори, пожалуйста.`, `${lastAuthor}, полностью согласен!`, `${lastAuthor}, как дела?`, `${lastAuthor}, погода и правда сегодня хорошая.`, `${lastAuthor}, пока!`,]

    const index = this.randomMessage(1, 10)

    const answer = {
      author: "Bot",
      text: botAnswer[index - 1],
    }

    if(lastAuthor != 'Bot' && this.messages.length != 0){
      this.timer = setTimeout(() => {
        this.handleMessageSend(answer)
      }, 3000)
    }
  }

  get messages(){
    const {chats} = this.state
    const {match} = this.props

    let messages = null

    if(match && chats[match.params.id]){
      messages = chats[match.params.id].messages
    }
    return messages
  }

  render(){
    const messages = this.messages
    return (
      <div className='messenger'>
      <Grid container wrap='nowrap' spacing={2}>
        <Grid xs={3}>
          <ChatsList chats={this.state.chats} onSend={this.handleAddChat}/>
        </Grid>
        <Grid xs={9}>
        <div className='message-list'>
        {messages ? (messages.length ? <MessagesList items={messages} author={messages}/>: <div>Пустой чат</div>) : <div>Выберите чат</div>}
        </div>
        {messages && <MessageForm onSend={this.handleMessageSend}/>}
        </Grid>
      </Grid>
      </div>
    )
  }
}