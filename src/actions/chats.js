export const CHATS_LOAD = 'CHATS_LOAD'
export const CHATS_MESSAGE_SEND = 'CHATS_MESSAGE_SEND'

export const ChatsLoadAction = () => ({
  type: CHATS_LOAD
})

export const ChatsMessageSendAction = (message) => ({
  type: CHATS_MESSAGE_SEND,
  payload: message
})