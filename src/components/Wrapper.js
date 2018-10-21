import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { withRouter } from 'react-router';
import Header from './Header.js';
import Footer from './Footer.js';

const styles = {
  site: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
  },
  content: {
    flex: 1,
    position: 'relative'
  }
};

class Wrapper extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    const  {classes, children } = this.props;
    
    return (
      <div className={classes.site}>
        <Header />
        <main className={classes.content}>
          {children}
        </main>
        <Footer />
      </div>
    );
  }
}

export default withRouter(injectSheet(styles)(Wrapper));
