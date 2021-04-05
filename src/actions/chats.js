export const CHATS_LOAD = 'CHATS_LOAD'
export const CHATS_MESSAGE_SEND = 'CHATS_MESSAGE_SEND'
export const CHATS_MESSAGE_DELETE = 'CHATS_MESSAGE_DELETE'

export const CHATS_LIST_LOAD = 'CHATS_LIST_LOAD'
export const CHATS_ADD = 'CHATS_ADD'
export const CHATS_DELETE = 'CHATS_DELETE'

export const ChatsLoadAction = () => ({
  type: CHATS_LOAD
})

export const ChatsMessageSendAction = (message) => ({
  type: CHATS_MESSAGE_SEND,
  payload: message
})

export const ChatsListLoadAction = () => ({
  type: CHATS_LIST_LOAD
})

export const ChatsAddAction = (title) => ({
  type: CHATS_ADD,
  payload: title
})

export const ChatsMessageDeleteAction = (id) => ({
  type: CHATS_MESSAGE_DELETE,
  payload: id
})

export const ChatDeleteAction = (id) => ({
  type: CHATS_DELETE,
  payload: id
})