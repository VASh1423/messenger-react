import { createAction } from 'redux-api-middleware'

export const CHATS_LOAD_REQUEST = 'CHATS_LOAD_REQUEST'
export const CHATS_LOAD_SUCCESS = 'CHATS_LOAD_SUCCESS'
export const CHATS_LOAD_FAILURE = 'CHATS_LOAD_FAILURE'

export const CHATS_MESSAGE_SEND_REQUEST = 'CHATS_MESSAGE_SEND_REQUEST'
export const CHATS_MESSAGE_SEND_SUCCESS = 'CHATS_MESSAGE_SEND_SUCCESS'
export const CHATS_MESSAGE_SEND_FAILURE = 'CHATS_MESSAGE_SEND_FAILURE'

export const CHAT_ADD_REQUEST = 'CHAT_ADD_REQUEST'
export const CHAT_ADD_SUCCESS = 'CHAT_ADD_SUCCESS'
export const CHAT_ADD_FAILURE = 'CHAT_ADD_FAILURE'

export const CHATS_MESSAGE_DELETE = 'CHATS_MESSAGE_DELETE'

export const CHATS_DELETE = 'CHATS_DELETE'

export const FIRE_CHAT = 'FIRE_CHAT'
export const UNFIRE_CHAT = 'UNFIRE_CHAT'

export const ChatsMessageSendAction = (message) =>
  createAction({
    endpoint: 'http://localhost:3000/messages',
    method: 'POST',
    body: JSON.stringify(message),
    headers: { 'Content-Type': 'application/json' },
    types: [
      CHATS_MESSAGE_SEND_REQUEST,
      CHATS_MESSAGE_SEND_SUCCESS,
      CHATS_MESSAGE_SEND_FAILURE,
    ],
  })

export const ChatsAddAction = (message) =>
  createAction({
    endpoint: 'http://localhost:3000/chats',
    method: 'POST',
    body: JSON.stringify(message),
    headers: { 'Content-Type': 'application/json' },
    types: [CHAT_ADD_REQUEST, CHAT_ADD_SUCCESS, CHAT_ADD_FAILURE],
  })

export const ChatsMessageDeleteAction = (message) => ({
  type: CHATS_MESSAGE_DELETE,
  payload: message,
})

export const ChatDeleteAction = (id) => ({
  type: CHATS_DELETE,
  payload: id,
})

export const ChatFireAction = (chatId) => ({
  type: FIRE_CHAT,
  payload: chatId,
})

export const ChatUnfireAction = (id) => ({
  type: UNFIRE_CHAT,
  payload: id,
})

export const ChatsLoadRequestAction = () => ({
  type: CHATS_LOAD_REQUEST,
})

export const ChatsLoadSuccessAction = (data) => ({
  type: CHATS_LOAD_SUCCESS,
  payload: data,
})

export const ChatsLoadFailureAction = (error) => ({
  type: CHATS_LOAD_FAILURE,
  payload: error,
})

export const ChatsLoadAction = () => {
  return async (dispatch) => {
    try {
      dispatch(ChatsLoadRequestAction())
      const result = await fetch('/api/chats?_embed=messages')
      dispatch(ChatsLoadSuccessAction(await result.json()))
    } catch (error) {
      dispatch(ChatsLoadFailureAction(error))
    }
  }
}
