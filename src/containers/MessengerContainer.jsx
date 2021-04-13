import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { nanoid } from 'nanoid'
import {push} from 'connected-react-router'
import {useParams} from 'react-router-dom'

import { Messenger } from 'components/Messenger'
import {ChatsLoadAction, ChatsMessageSendAction, ChatsAddAction, ChatsMessageDeleteAction, ChatDeleteAction, ChatUnfireAction} from '../actions/chats'

export const MessengerContainer = (props) => {
  const dispatch = useDispatch()
  const {id} = useParams()

  const chats = useSelector((state) => state.chats.entries)
  const messages = chats[id] ? chats[id].messages : null

  const [isLoading,  isError] = useSelector((state) => [state.chats.loading, state.chats.error])

  useEffect(() => {
    dispatch(ChatsLoadAction())
  }, [])

  const handleMessageSend = (message) => {
    dispatch(ChatsMessageSendAction({
      ...message,
      id: nanoid(),
      chatId: +id
    }))
  }

  const handleAddChat = (title) => {
    title.id=chats.length

    dispatch(ChatsAddAction({...title}))
    dispatch(push(`/chat/${title.id}`))
  }

  const handleDeleteMessage = (id) => {
    dispatch(ChatsMessageDeleteAction({id, chatId}))
  }

  const handleDeleteChat = (id) => {
    dispatch(ChatDeleteAction({id}))
  }

  const handleChatUnfire = (id) => {
    dispatch(ChatUnfireAction({id}))
  }

  return <Messenger 
      messages={messages} 
      handleMessageSend={handleMessageSend} 
      chats={chats} 
      handleAddChat={handleAddChat}
      handleDeleteMessage={handleDeleteMessage}
      handleDeleteChat={handleDeleteChat}
      handleChatUnfire={handleChatUnfire}
      isLoading={isLoading}
      isError={isError}
    />
}