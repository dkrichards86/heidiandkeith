import React from 'react';
import Countdown from './Countdown.js';
import EVENT_DATETIME from "../utils/event_date.js";

const blurbs = [
  'Saying "we do."',
  "Getting hitched.",
  "Walking the aisle.",
  "Goin’ to the chapel.",
  "Tying the knot.",
  "Jumping the broom.",
];

const getBlurb = () => {
  const index = Math.floor(Math.random() * blurbs.length);

  return blurbs[index];
};

const Home = () => (
  <React.Fragment>
    <div className="container">
      <section className="section">
        <div className="columns">
          <div className="column is-two-thirds">
            <h2 className="title">
              Heidi & Keith
            </h2>
            <h4 className="subtitle">
              {getBlurb()}
            </h4>
            <p>
              We're getting married on {EVENT_DATETIME.format('dddd, MMMM Do')} in Durham, NC.
              Come join us as we say "I do" and start a new chapter in our lives.
            </p>
          </div>
          <div className="column">
            <figure class="image is-3by4">
              <img src='./heidiandkeith.jpg' />
            </figure>
          </div>
        </div>
      </section>
    </div>
    <section className="hero is-primary is-medium">
      <div className="hero-body">
        <div className="container">
          <h2 className="title has-text-centered">
            {EVENT_DATETIME.format('MMMM Do, YYYY')} &bull; Durham, NC
          </h2>
          <h4 className="subtitle has-text-centered">
            The countdown is on!
          </h4>
          <Countdown />
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default Home;
