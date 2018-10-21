import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Home from './components/Home.js';
import Venue from './components/Venue.js';
import Event from './components/Event.js';
import Accommodations from './components/Accommodations.js';
import Registry from './components/Registry.js';
import Activities from './components/Activities.js';
import NotFound from './components/NotFound.js';
import Wrapper from './components/Wrapper.js';

import './styles.scss';

ReactDOM.render(
  <Router>
    <Wrapper>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/venue" component={Venue} />
        <Route path="/event" component={Event} />
        <Route path="/accommodations" component={Accommodations} />
        <Route path="/registry" component={Registry} />
        <Route path="/activities" component={Activities} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Wrapper>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
