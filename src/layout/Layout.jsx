import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'
import { Switch, Route, Link } from 'react-router-dom'

import { Messenger } from 'components/Messenger'
import {Home} from 'pages/Home'
import {About} from 'pages/About'
import {Error} from 'pages/Error'

import {chats} from '../helpers/chatsData'

export class Layout extends React.Component {
  render(){
    return(
      <div>
        <div>
          <List>
            {chats.map(chat => (
              <ListItem key={chat.id}>           
                <Link to={`/chat/${chat.id}`}><ListItemText primary={chat.title}/></Link>
              </ListItem>
            ))}
            <ListItem>           
              <Link to='/'><ListItemText primary='Главная'/></Link>
            </ListItem>
            <ListItem>         
              <Link to='/about'><ListItemText primary='О нас'/></Link>
            </ListItem>
            <ListItem>
              <Link to='/pagenotfound'><ListItemText primary='Ошибка'/></Link>
            </ListItem>
          </List>
        </div>
        <div>
          <Switch>
            <Route path='/' exact><Home/></Route>
            <Route path='/about' exact><About/></Route>
            <Route path='/chat/:id([0-9]+)' component={Messenger} exact/>
            <Route path='*'><Error/></Route>
          </Switch>
        </div>
      </div>
    )
  }
}