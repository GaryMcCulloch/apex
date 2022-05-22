import Amplify, { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import awsconfig from './aws-exports';
import ButtonAppBar from './components/ButtonAppBar';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';


Amplify.configure(awsconfig);
Amplify.configure(awsExports);

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/hero_dark.jpg'})`,
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover'
  }
}));

function App({ signOut, user }) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <Header signOut={signOut}/>
      </div>
    </>
  );
}

export default withAuthenticator(App);
