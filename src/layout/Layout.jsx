import React from 'react'
import { Switch, Route} from 'react-router-dom'

import { MessengerContainer } from 'containers/MessengerContainer'
import {Home} from 'pages/Home'
import {About} from 'pages/About'
import {Error} from 'pages/Error'
import { ProfileContainer } from '../containers/ProfileContainer'

export class Layout extends React.Component {
  render(){
    return(
      <div>
        <div>
          <Switch>
            <Route path='/' exact><Home/></Route>
            <Route path='/profile' component={ProfileContainer} exact></Route>
            <Route path='/about' exact><About/></Route>
            <Route path='/chat' component={MessengerContainer} exact/>
            <Route path='/chat/:id([0-9]+)' component={MessengerContainer} exact/>
            <Route path='*'><Error/></Route>
          </Switch>
        </div>
      </div>
    )
  }
}