import React from 'react'
import ReactDom from 'react-dom'
import { Header } from './components/Heder'
import { Messenger } from './components/Messenger'
import './style/main.css'


ReactDom.render(
  <>
    <Header/>
    <Messenger/>
  </>
, document.getElementById('root'))