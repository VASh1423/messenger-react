import update from 'react-addons-update'

import {
  CHATS_LOAD_REQUEST,
  CHATS_LOAD_SUCCESS,
  CHATS_LOAD_FAILURE, 
  CHATS_MESSAGE_SEND_SUCCESS,
  CHAT_ADD_SUCCESS,
  CHATS_MESSAGE_DELETE,
  CHATS_DELETE,
  FIRE_CHAT,
  UNFIRE_CHAT
} from '../actions/chats'

const initialState = {
  entries: [],
  loading: false,
  error: false
}

export const chatReducer = (state=initialState, action) => {
  switch (action.type) {
    case CHATS_LOAD_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case CHATS_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        entries: action.payload,
      };
    case CHATS_LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case CHATS_MESSAGE_SEND_SUCCESS:
      return update(state, {
        entries: {
          [action.payload.chatId]: {
            messages: { 
              $push: [{ id: action.payload.id, text: action.payload.text, author: action.payload.author }] 
            },
          },
        },
      });
    case CHAT_ADD_SUCCESS:
      return update(state, {
        entries: {
          $push: [
            {
              id: `${action.payload.id}`,
              title: action.payload.title,
              messages: action.payload.messages,
            },
          ],
        },
      });
    case CHATS_MESSAGE_DELETE:
      return update(state, {
        entries: {
          [action.payload.chatId]: {
            messages: {
              $splice: [[action.payload.id, 1]],
            },
          },
        },
      });
    case CHATS_DELETE:
      return {
        ...state,
        entries: state.entries.filter((item) => item.id != action.payload.id),
      };
    case FIRE_CHAT:
      return update(state, {
        entries: {
          [action.payload.chatId]: {
            fire: { $set: true },
          },
        },
      });
    case UNFIRE_CHAT:
      return update(state, {
        entries: {
          [action.payload.id]: {
            fire: { $set: false },
          },
        },
      });
    default:
      return state;
  }
}