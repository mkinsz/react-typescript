import React, { useEffect } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import Dashboard from '../components/dashboard';
import Extension from '../components/extension';
import About from '../components/about';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

const Home = (props: any) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/dashboard':
        setValue(0);
        break;
      case '/extension':
        setValue(1);
        break;
      case '/about':
        setValue(2);
        break;
      default:
        setValue(0);
    }
  }, [location.pathname]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static' color='default'>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='simple tabs example'>
          <Tab
            label='Dashboard'
            component='a'
            onClick={() => history.push('/dashboard')}
          />
          <Tab
            label='Extension'
            component='a'
            onClick={() => history.push('/extension')}
          />
          <Tab
            label='About'
            component='a'
            onClick={() => history.push('/about')}
          />
        </Tabs>
      </AppBar>
      <Switch>
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/extension' component={Extension} />
        <Route exact path='/about' component={About} />
        <Route exact path='/' render={() => <Redirect to='/dashboard' />} />
      </Switch>
    </div>
  );
};

export default Home;
