import React from 'react';
import { Link } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';

import LanguagePicker from '../languagePicker';

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
    height: '100%',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    listStyle: 'none'
  },
  controlsBar__flowerLogo: {
    height: '2.8vw',
    width: '2.8vw',
    margin: '0 2vw'
  },
  controlsBar__controlLinkButton: {
    height: '100%',
    padding: '0 1vw',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',

    borderBottom: '0.2vw solid #303030',

    '&:hover': {
      color: 'red',

      cursor: 'pointer',
      borderBottom: '0.2vw solid #40c8f4'
    }
  }
});

const routingLinkStyle = {
  height: '100%',
  width: '100%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  textDecoration: 'none',
  textTransform: 'uppercase',
  color: '#ffffff'
};

const NavBar = props => {
  const {
    navBar,
    controlsBar,
    controlsBar__flowerLogo,
    controlsBar__controlLinkButton
  } = useStyles();

  const { homeLink, poetsListLink } = props;
  return (
      <header className={navBar}>
        <LanguagePicker />

        <ul className={controlsBar}>
          <li className={controlsBar__controlLinkButton}>
            <Link style={routingLinkStyle} to="/">
              {homeLink}
            </Link>
          </li>
          <li>
            <img
              className={`blue-flower-logo ${controlsBar__flowerLogo}`}
              src={blueFlowerLogo}
              alt="blue flower"
            />
          </li>
          <li className={controlsBar__controlLinkButton}>
            <Link style={routingLinkStyle} to="/page-2">
              {poetsListLink}
            </Link>
          </li>
        </ul>
      </header>
  );
};

export default NavBar;
