import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({}));
function Hero() {
  const classes = useStyles();
  return (
    <div className={classes.root}>island</div>
  )
}

export default Hero