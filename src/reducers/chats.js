import update from 'react-addons-update'

import {
  CHATS_LOAD, 
  CHATS_MESSAGE_SEND,
  CHATS_LIST_LOAD,
  CHATS_ADD,
  CHATS_MESSAGE_DELETE,
  CHATS_DELETE
} from '../actions/chats'

const initialState = {
  entries: [],
  loading: false
}

import {chats} from '../helpers/chatsData'

export const chatReducer = (state=initialState, action) => {
  switch(action.type){
    case CHATS_LOAD:
      return {
        ...state,
        entries: chats
      }
    case CHATS_MESSAGE_SEND:
      return update(state, {
        entries: {
          [action.payload.chatId]: {
            messages: {$push: [{id: action.payload.id, text: action.payload.text, author: action.payload.author}]}
          }
        }
      })
    case CHATS_LIST_LOAD:
      return {
        ...state,
        entries: chats
      }
    case CHATS_ADD:
      return update(state, {
        entries: {$push: [{id: action.payload.id, title: action.payload.title, messages: action.payload.messages}]}
      })
    case CHATS_MESSAGE_DELETE:
      return update(state, {
        entries: {
            [action.payload.chatId]: {
                messages: {
                    $splice: [[action.payload.id, 1]],
                },
            },
        },
    })
    case CHATS_DELETE:
      return {
        ...state,
        entries: state.entries.filter((item) => item.id != action.payload.id)
    };
    default:
      return state
  }
}