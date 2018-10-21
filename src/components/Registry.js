import React from 'react';
import Card from './Card.js';

import { registryData } from '../data';

const Registry = () => (
  <React.Fragment>
    <div className="container">
      <section className="section">
        <h2 className="title">
          The Registry
        </h2>
        <h4 className="subtitle">
          In lieu of gifts, donate!
        </h4>
        <p>
          We're very fortunate to have a full house. Instead of a registy, we'd
          be honored if you would help us help others not as fortunate. We've
          identified some of our favorite charities. Feel free to browse their
          services or contribute to any other charity you stronlgy support!
        </p>
        <div className="tabs">
          <ul>
            <li className="is-active">
              <a>Select Charities</a>
            </li>
          </ul>
        </div>
        {registryData.map(d => <Card {...d} key={d.links[0].link} /> )}
      </section>
    </div>
  </React.Fragment>
);

export default Registry;
