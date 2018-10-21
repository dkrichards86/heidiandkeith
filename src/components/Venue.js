import React from 'react';

const Venue = () => (
  <React.Fragment>
    <div className="container">
      <section className="section">
        <h2 className="title">
          The Venue
        </h2>
        <h4 className="subtitle">
          The Rickhouse &bull; Durham, NC
        </h4>
        <p>
          The Rickhouse is the qunitessential Durham event space showcasing reclaimed wood and exposed brick. Originally a
          tobacco prizery for one of Durham's many historic cigarette manufacturers, RJ Reynolds, 
          it has since be restored and converted into a beautiful event space.
          The Rickhouse overlooks the famed Durham Athletic Park, former home to the Durham
          Bulls from 1926 to 1994 and filming location for the movie Bull Durham.
          The Rickhouse is also home to <a href="https://www.facebook.com/TwoDoorsDistillingCo/" rel="noopener noreferrer" target="_blank">Two Doors Distilling</a>.
        </p>
      </section>
    </div>
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
            <div className="columns">
              <div className="column is-half">
                <h3 className="title">
                  The Rickhouse
                </h3>
                <p>
                  609 Foster St
                  <br />
                  Durham, NC 27701
                  <br />
                  <a href="tel:9192641038">(919) 264-1038</a>
                  <br />
                  <a href="http://www.rickhousedurham.com/" target="_blank" rel="noopener noreferrer">
                    http://www.rickhousedurham.com/
                  </a>
                </p>
              </div>
              <div className="column is-half">
                <div className="map-responsive">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12910.880417940605!2d-78.901697!3d36.002705!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa372a12872d163e5!2sThe+Rickhouse!5e0!3m2!1sen!2sus!4v1534510119880"
                    width="600"
                    height="450"
                    frameborder="0"
                    title="venue_map_embed"
                    allowFullScreen>
                  </iframe>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default Venue;
