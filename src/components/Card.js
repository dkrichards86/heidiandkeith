import React from 'react';
import classNames from 'classnames';

const Card = (props) => (
    <div className="box">
        <article className="media">
          <figure className="media-left">
            <p className="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="placeholder" />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{props.title}</strong>
                <br />
                {props.description}
              </p>
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                {props.links.map(link => {
                  const linkClass = classNames('fas', 'fa-lg', `fa-${link.icon}`);
                  return (
                    <a href={link.link} className="level-item" target="_blank">
                      <span className="icon is-large has-text-primary">
                        <i className={linkClass}></i>
                      </span>
                    </a>
                  );
                })}
              </div>
            </nav>
          </div>
        </article>
    </div>
);

export default Card;