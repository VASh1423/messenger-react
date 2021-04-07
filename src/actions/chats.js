import {createAction} from 'redux-api-middleware'

// export const CHATS_LOAD = 'CHATS_LOAD'
export const CHATS_MESSAGE_SEND = 'CHATS_MESSAGE_SEND'
export const CHATS_MESSAGE_DELETE = 'CHATS_MESSAGE_DELETE'

export const CHATS_LOAD_REQUEST = 'CHATS_LOAD_REQUEST'
export const CHATS_LOAD_SUCCESS = 'CHATS_LOAD_SUCCESS'
export const CHATS_LOAD_FAILURE = 'CHATS_LOAD_FAILURE'

export const CHATS_LIST_LOAD = 'CHATS_LIST_LOAD'
export const CHATS_ADD = 'CHATS_ADD'
export const CHATS_DELETE = 'CHATS_DELETE'

export const FIRE_CHAT = 'FIRE_CHAT'
export const UNFIRE_CHAT = 'UNFIRE_CHAT'

// export const ChatsLoadAction = () => ({
//   type: CHATS_LOAD
// })

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

export const ChatFireAction = (chatId) => ({
  type: FIRE_CHAT,
  payload: chatId
})

export const ChatUnfireAction = (id) => ({
  type: UNFIRE_CHAT,
  payload: id
})

// Middleware
// export const ChatsLoadAction = () => createAction({
//   endpoint: 'http://localhost:3000/chats?_embed=messages',
//   method: 'GET',
//   headers: { 'Content-Type': 'application/json' },
//   types: [
//     CHATS_LOAD_REQUEST,
//     CHATS_LOAD_SUCCESS,
//     CHATS_LOAD_FAILURE
//   ]
// })

// fetch
export const ChatsLoadRequestAction = () => ({
  type: CHATS_LOAD_REQUEST
})

export const ChatsLoadSuccessAction = (data) => ({
  type: CHATS_LOAD_SUCCESS,
  payload: data
})

export const ChatsLoadFailureAction = (error) => ({
  type: CHATS_LOAD_FAILURE,
  payload: error
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