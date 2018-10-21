import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="container">
        <section className="section">
            <h2 className="title">
                Page Not Found
            </h2>
            <h4 className="subtitle">
                Are you sure that page exists?
            </h4>
            <p>
               Let's get you back to the <Link to='/'>homepage</Link>.
            </p>
        </section>
    </div>
);

export default Home;