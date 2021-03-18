import React from 'react'
import ReactDom from 'react-dom'

const messageData = ['Hello', 'Hi', 'Hallo', 'Hola']

const Message = ({text, author}) => {
  return <p>{text} - <b>{author}</b></p>
}

const MessageList = (props) => {
  return props.items.map((item, index) => <Message text={item} author='author' key={index}/>)
}

const Button = ({children}) => {
  const handlerClick = () => {
    console.log('Click')
  }

  return <button onClick={handlerClick}>{children}</button>
}

ReactDom.render(
  <>
    <MessageList items={messageData} />
    <Button>Жми</Button>
  </>
, document.getElementById('root'))