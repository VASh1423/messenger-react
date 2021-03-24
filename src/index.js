import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { Header } from './components/Heder'
import { Layout } from './layout/Layout'

import './style/main.css'


ReactDom.render(
  <BrowserRouter>
    <Header/>
    <Layout/>
  </BrowserRouter>
, document.getElementById('root'))