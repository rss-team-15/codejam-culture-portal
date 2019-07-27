import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import LanguagePicker from '../languagePicker';
import Home from '../home';
import AuthorsList from '../AuthorsList';

import blueFlowerLogo from './assets/blue-flower-logo.png';

const useStyles = makeStyles({
  navBar: {
    position: 'fixed',
    height: '4vw',
    width: '100%',
    padding: '0 2vw',
    zIndex: 10,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#303030',
    boxShadow: '1px 1px 12px #000000f0;'
  },
  controlsBar: {
    width: '15vw',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    listStyle: 'none'
  },
  controlsBar__flowerLogo: {
    height: '2.8vw',
    width: '2.8vw'
  }
});

const NavBar = props => {
  const { navBar, controlsBar, controlsBar__flowerLogo } = useStyles();
  return (
    <BrowserRouter>
      <header className={navBar}>
        <LanguagePicker />

        <ul className={controlsBar}>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <img
              className={`blue-flower-logo ${controlsBar__flowerLogo}`}
              src={blueFlowerLogo}
              alt=""
            />
          </li>
          <li>
            <Link to="/poets-list">Poets List</Link>
          </li>
        </ul>
      </header>

      <Route path="/home" component={Home} />
      <Route path="/poets-list" component={AuthorsList} />
    </BrowserRouter>
  );
};

export default NavBar;
