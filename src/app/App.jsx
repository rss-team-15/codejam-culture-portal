import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavBar from '../components/navBar';

import { languagesStore, languagesInitState } from '../storage';

class App extends Component {
  constructor(props) {
    super(props);

    const { activeLanguage } = languagesStore.getState();

    this.state = {
      activeLanguage,
    };
  }

  render() {
    languagesStore.subscribe(() => {
      const { activeLanguage } = languagesStore.getState();

      this.setState({ activeLanguage });
    });

    const { children } = this.props;

    return (
      <React.Fragment>
        <NavBar
          homeLink={this.state.activeLanguage.navbar.homeLink}
          poetsListLink={this.state.activeLanguage.navbar.poetsListLink}
        />
        <main>{children}</main>
        <footer className='footer'>
          <p>
            © {new Date().getFullYear()}, Built with	&nbsp;
            {`  `}
          </p>
          <p>
            <a href="https://www.gatsbyjs.org"> Gatsby</a>
          </p>
        </footer>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
