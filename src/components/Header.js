import React from 'react';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const styles = {
  header: {
    fontFamily: ["'Great Vibes'", 'cursive']
  }
};

class Navigation extends React.Component {
  constructor() {
    super();
    
    this.state = {
      menuOpen: false
    };
  }
  
  componentWillReceiveProps (newProps) {
    if (this.state.menuOpen && (this.props.location.pathname !== newProps.location.pathname)) {
      this.setState({menuOpen: false});
    }
  }
  
  render() {
    const { classes } = this.props;
    const navClasses = classNames('navbar');
    const burgerClasses = classNames('navbar-burger', 'burger', { 'is-active': this.state.menuOpen });
    const menuClasses = classNames('navbar-menu', { 'is-active': this.state.menuOpen });
    const headerClass = classNames('is-size-3', classes.header);

    return (
      <React.Fragment>
        <div className="nav-top"></div>
        <nav className={navClasses}>
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                  <h1 className={headerClass}>Heidi & Keith</h1>
              </Link>
              <span
                className={burgerClasses}
                data-target="primary-navigation"
                onClick={() => this.setState({menuOpen: !this.state.menuOpen})}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="primary-navigation" className={menuClasses}>
              <div className="navbar-end">
                <Link className="navbar-item" to="/event">
                  Event
                </Link>
                <Link className="navbar-item" to="/venue">
                  Venue
                </Link>
                <Link className="navbar-item" to="/accommodations">
                  Accomodations
                </Link>
                <Link className="navbar-item" to="/registry">
                  Registry
                </Link>
                <Link className="navbar-item" to="/activities">
                  Explore Durham
                </Link>
              </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default withRouter(injectSheet(styles)(Navigation));