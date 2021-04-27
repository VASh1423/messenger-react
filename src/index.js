import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/integration/react'

import { Header } from './components/Header'
import { Layout } from './layout/Layout'
import { history, initStore } from './store'

import './style/main.css'

const { store, persistor } = initStore()

ReactDom.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ConnectedRouter history={history}>
        <Header />
        <Layout />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
)
