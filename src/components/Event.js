import React from 'react';
import EVENT_DATETIME from "../utils/event_date.js";

const Event = () => (
  <div className="container">
    <section className="section">
      <div className="columns">
        <div className="column is-two-thirds">
          <h2 className="title">
              The Event
          </h2>
          <h4 className="subtitle">
              {EVENT_DATETIME.format('MMMM Do, YYYY')}
          </h4>
          <p>
            Come join us on the first day of the rest of our life.
          </p>
          <p>
            The dress code for this event is cocktail attire. Break out those
            sport coats and little black dresses.
          </p>
          <p>
            The ceremony is unplugged. We want you to live the moment with us, not
            through a screen. Please turn off your electronic devices. Our photographers
            will handle the pictures- I promise!
          </p>
          <p>
            Dinner will be some authentic Carolina whole hog BBQ followed by some
            of Durham's tastiest ice cream!
          </p>
        </div>
        <div className="column">
          <div className="timeline is-centered">
            <div className="timeline-header">
              <span className="tag is-medium is-primary">5:00pm</span>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker is-icon">
                <i className="fas fa-bell"></i>
              </div>
              <div className="timeline-content">
                <p className="heading">5:30pm</p>
                <p>Ceremony Begins</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker is-icon">
                <i className="fas fa-cocktail"></i>
              </div>
              <div className="timeline-content">
                <p className="heading">6:00pm</p>
                <p>Cocktail Hour</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker is-icon">
                <i className="fas fa-utensils"></i>
              </div>
              <div className="timeline-content">
                <p className="heading">7:00pm</p>
                <p>Meal Service</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker is-icon">
                <i className="fas fa-music"></i>
              </div>
              <div className="timeline-content">
                <p className="heading">8:00pm</p>
                <p>Party Time</p>
              </div>
            </div>
            <div className="timeline-header">
              <span className="tag is-medium is-primary">10:00pm</span>
            </div>
          </div>
        </div>
      </div>
   </section>
  </div>
);

export default Event;