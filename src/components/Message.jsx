import React from 'react'

export const Message = ({text, author}) => {
  return <p>{text} - <b>{author}</b></p>
}