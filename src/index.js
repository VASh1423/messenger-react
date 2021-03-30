import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'

import { Header } from './components/Heder'
import { Layout } from './layout/Layout'
import { store } from './store'

import './style/main.css'


ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header/>
      <Layout/>
    </BrowserRouter>
  </Provider>
, document.getElementById('root'))