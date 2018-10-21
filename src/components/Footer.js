import React from 'react';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';

const styles = {
  header: {
    fontFamily: ["'Great Vibes'", 'cursive']
  }
};

const Footer = ({classes}) => {
  const headerClass = classNames('is-size-4', classes.header);

  return (
    <footer className="footer">
      <div className="has-text-centered">
        <nav className="level">
          <div className="level-left">
            <Link className="navbar-item" to="/">
              <h1 className={headerClass}>Heidi & Keith</h1>
            </Link>
          </div>
          <div className="level-right">
            <Link className="level-item" to="/event">
              Event
            </Link>
            <Link className="level-item" to="/venue">
              Venue
            </Link>
            <Link className="level-item" to="/accommodations">
              Accomodations
            </Link>
            <Link className="level-item" to="/registry">
              Registry
            </Link>
            <Link className="level-item" to="/activities">
              Explore Durham
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default injectSheet(styles)(Footer);