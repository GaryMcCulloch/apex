import { makeStyles } from '@material-ui/core/styles';
import {AppBar, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  appbar: {
    background: 'none'
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto'
  },
  icon: {
    color: '#ffffff',
    fontSize: '2rem',
  },
  appbarTitle: {
    flexGrow: '1',
    fontFamily: 'Roboto'
  },
  title: {
    color: '#ffffff'
  }

}));

function Header({signOut}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>APEX</h1>
          <IconButton onClick={signOut}>
            <SortIcon className={classes.icon}/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <div>
        <h1 className={classes.title}>
          Nobody Cares. <br />
          Work Harder.
        </h1>
      </div>
    </div>
  )
}

export default Header