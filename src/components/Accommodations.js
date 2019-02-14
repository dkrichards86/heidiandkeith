import React from 'react';

const HOTEL_URL = 'https://gc.synxis.com/rez.aspx?Hotel=75393&Chain=16978&group=7009674';

const Accommodations = () => (
  <React.Fragment>
    <div className="container">
      <section className="section">
        <h2 className="title">
          The Accomodations
        </h2>
        <h4 className="subtitle">
          Unscripted Hotel
        </h4>
        <p>
          Unscripted Hotel is located in the heart of
          downtown Durham. Conveniently located, Unscripted is an easy
          walk to great food and other fun. It's also just two short blocks from
          the ceremony and reception venue. 
        </p>
        <p>
          For your convenienve, we've arranged a <a href={HOTEL_URL} _target="blank">wedding block</a>.
        </p>
      </section>
    </div>
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
            <div className="columns">
              <div className="column is-half">
                <h3 className="title">
                  Unscripted Hotel
                </h3>
                <p>
                  202 N Corcoran Street
                  <br />
                  Durham, NC 27701
                  <br />
                  <a href="tel:9843299500">(984) 329-9500</a>
                  <br />
                  <a
                    href="http://www.unscriptedhotels.com/"
                    rel="noopener noreferrer"
                    target="_blank">
                    http://www.unscriptedhotels.com/
                  </a>
                </p>
              </div>
              <div className="column is-half">
                <div className="map-responsive">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1260.9850942329178!2d-78.91182967080968!3d35.9993092775798!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2602be3c12b18c7e!2sUnscripted+Durham!5e0!3m2!1sen!2sus!4v1550182621030"
                    width="600"
                    height="450"
                    frameborder="0"
                    title="hotel_map_embed"
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

export default Accommodations;
