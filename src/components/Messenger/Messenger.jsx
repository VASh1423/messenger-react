import React from 'react'

import { MessageForm } from '../MessageForm'
import { MessagesList } from '../MessagesList'

import './Messenger.css'
import { Grid } from '@material-ui/core'
import { ChatsList } from '../ChatsList'

export class Messenger extends React.Component{
  timer = null

//   randomMessage(min, max) {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
//   }

// componentDidUpdate() {
//     if(!this.messages) return
//     if(!this.messages.length) return

//     const lastAuthor = this.messages[this.messages.length - 1].author

//     clearTimeout(this.timer)

//     const botAnswer = [`Привет, ${lastAuthor}, чем я могу тебе помочь?`, `${lastAuthor}, спроси что-нибудь проще.`, `Очень интересная история, ${lastAuthor}`, `Не согласен с тобой, ${lastAuthor}.`, `Привет, ${lastAuthor}, приятно познакомиться!`, `${lastAuthor}, повтори, пожалуйста.`, `${lastAuthor}, полностью согласен!`, `${lastAuthor}, как дела?`, `${lastAuthor}, погода и правда сегодня хорошая.`, `${lastAuthor}, пока!`,]

//     const index = this.randomMessage(1, 10)

//     const answer = {
//       author: "Bot",
//       text: botAnswer[index - 1],
//     }

//     if(lastAuthor != 'Bot' && this.messages.length != 0){
//       this.timer = setTimeout(() => {
//         this.handleMessageSend(answer)
//       }, 3000)
//     }
//   }

  render(){
    const {messages, handleMessageSend, chats, handleAddChat} = this.props
    return (
      <div className='messenger'>
      <Grid container wrap='nowrap' spacing={2}>
        <Grid item={true} xs={3}>
          <ChatsList chats={chats} onSend={handleAddChat}/>
        </Grid>
        <Grid item={true} xs={9}>
        <div className='message-list'>
        {messages ? (messages.length ? <MessagesList items={messages} author={messages}/>: <div>Пустой чат</div>) : <div>Выберите чат</div>}
        </div>
        {messages && <MessageForm onSend={handleMessageSend}/>}
        </Grid>
      </Grid>
      </div>
    )
  }
}