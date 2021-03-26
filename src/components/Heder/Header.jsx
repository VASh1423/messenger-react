import React from 'react'

import { ListItemText } from '@material-ui/core'
import { Link } from 'react-router-dom'

import './Header.css'

export const Header = () => {
  return (
    <div className="container">
      <div className="title">
        <Link to="/chat">
          <ListItemText primary="Messenger" />
        </Link>
        <Link to="/">
          <ListItemText primary="Главная" />
        </Link>
        <Link to="/about">
          <ListItemText primary="О нас" />
        </Link>
        <Link to="/pagenotfound">
          <ListItemText primary="Ошибка" />
        </Link>
      </div>
    </div>
  );
}