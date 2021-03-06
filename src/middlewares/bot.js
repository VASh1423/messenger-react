import { nanoid } from 'nanoid'

import {
  CHATS_MESSAGE_SEND_SUCCESS,
  ChatsMessageSendAction,
  ChatFireAction,
} from '../actions/chats'

export const botMiddleware = (store) => (next) => (action) => {
  if (action.type === CHATS_MESSAGE_SEND_SUCCESS) {
    const { author, chatId } = action.payload
    if (author !== 'Bot') {
      setTimeout(() => {
        store.dispatch(
          ChatsMessageSendAction({
            id: nanoid(),
            chatId,
            author: 'Bot',
            text: randomMessage(author),
          }),
        )
        store.dispatch(ChatFireAction({ chatId }))
      }, 1000)
    }
  }
  return next(action)
}

function randomMessage(author) {
  const botAnswer = [
    `Привет, ${author}, чем я могу тебе помочь?`,
    `${author}, спроси что-нибудь проще.`,
    `Очень интересная история, ${author}`,
    `Не согласен с тобой, ${author}.`,
    `Привет, ${author}, приятно познакомиться!`,
    `${author}, повтори, пожалуйста.`,
    `${author}, полностью согласен!`,
    `${author}, как дела?`,
    `${author}, погода и правда сегодня хорошая.`,
    `${author}, пока!`,
  ]

  const rand = 1 + Math.random() * (botAnswer.length - 1)

  return botAnswer[Math.floor(rand)]
}
