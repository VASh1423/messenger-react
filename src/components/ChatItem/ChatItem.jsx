import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import { Link } from 'react-router-dom';

import './ChatItem.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingTop: 0,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const ChatItem = ({chat, id, handleDeleteChat}) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <Link to={`/chat/${chat.id}`}>
        <ListItem className="listItems">
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={chat.title} secondary="Jan 9, 2014" />
          <button onClick={() => handleDeleteChat(id)}>Удалить</button>
        </ListItem>
      </Link>
    </List>
  );
}