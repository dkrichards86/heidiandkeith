import React from 'react';

const HOTEL_URL = 'https://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=Schoeppner%20Richards%20Wedding%5ERDUCV%60KRSKRSD%60139.00%60USD%60false%605%603/22/19%603/24/19%602/22/19&app=resvlink&stop_mobi=yes';

const Accommodations = () => (
  <React.Fragment>
    <div className="container">
      <section className="section">
        <h2 className="title">
          The Accomodations
        </h2>
        <h4 className="subtitle">
          Durham Mariott City Center
        </h4>
        <p>
          The Durham Mariott is located in the heart of
          downtown Durham. Conveniently located, the Durham Marriott is an easy
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
                  Durham Mariott City Center
                </h3>
                <p>
                  201 Foster Street
                  <br />
                  Durham, NC 27701
                  <br />
                  <a href="tel:9197686000">(919) 768-6000</a>
                  <br />
                  <a
                    href="https://www.marriott.com/hotels/travel/rducv-durham-marriott-city-center/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2"
                    rel="noopener noreferrer"
                    target="_blank">
                    https://www.marriott.com/
                  </a>
                </p>
              </div>
              <div className="column is-half">
                <div className="map-responsive">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12911.723585135162!2d-78.90976857301219!3d35.997555048012565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ace47269394513%3A0x316b5bb9b709be94!2sDurham+Marriott+City+Center!5e0!3m2!1sen!2sus!4v1535299105148"
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
