import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import img from '../img/IMG_2.jpg';

import './pages.css'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export const Profile = ({data, isLoading, isError}) => {
  const classes = useStyles()

  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div className="pages_container">
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar} src={img}/>
          }
          title={`${data[0].secondName} ${data[0].firstName}`}
          subheader={data[0].dateOfBirth}
        />
        <CardMedia
          className={classes.media}
          image={img}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {data[0].aboutMe}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
