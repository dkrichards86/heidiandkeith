import React from 'react';
import classNames from 'classnames';
import Card from './Card.js';

import { activitiesData } from '../data';

const TABS = {
  restaurants: {
    label: "Restaurants",
    dataset: activitiesData.restaurants
  },
  coffee: {
    label: "Coffee Shops",
    dataset: activitiesData.coffee
  },
  imbiberies: {
    label: "Imbiberies",
    dataset: activitiesData.imbiberies
  },
  activities: {
    label: "Activities",
    dataset: activitiesData.activities
  }
};


class Activities extends React.Component {
  constructor() {
    super()

    this.state = {
      tab: 'restaurants'
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <section className="section">
            <h2 className="title">
              Explore Durham
            </h2>
            <h4 className="subtitle">
              Welcome to the Bull City.
            </h4>
            <p>
              We both really appreciate and enjoy Durham. We hope you enjoy it
              as much as we do. To make your trip that much better, we've compiled
              a list of our favorite locales.
            </p>
            <div className="tabs">
              <ul>
                {Object.keys(TABS).map(key => {
                  const tab = TABS[key];
                  
                  const tabClass = classNames({'is-active': this.state.tab === key})
                  return (
                    <li className={tabClass} onClick={() => this.setState({tab: key})} key={`tab-${key}`}>
                      <a>{tab.label}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {TABS[this.state.tab].dataset.map(d => <Card {...d} key={`${d.links[0].link}-view`} />)}
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Activities;
