import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'
import { Switch, Route, Link } from 'react-router-dom'

import { Messenger } from 'components/Messenger'
import {Home} from 'pages/Home'
import {About} from 'pages/About'
import {Error} from 'pages/Error'

export class Layout extends React.Component {
  render(){
    return(
      <div>
        <div>
          <Switch>
            <Route path='/' exact><Home/></Route>
            <Route path='/about' exact><About/></Route>
            <Route path='/chat' component={Messenger} exact/>
            <Route path='/chat/:id([0-9]+)' component={Messenger} exact/>
            <Route path='*'><Error/></Route>
          </Switch>
        </div>
      </div>
    )
  }
}