import React from 'react';
import moment from 'moment';
import isEqual from 'lodash/isEqual';
import EVENT_DATETIME from "../utils/event_date.js";

class Countdown extends React.Component {
    constructor() {
        super();

        this._timer = null;

        this.state = {
            duration: {}
        };
    }

    componentWillMount() {
        this._timer = window.setInterval(() => this.updateTime(), 100);
        
        this.updateTime();
    }
    
    componentWillUnmount() {
        window.clearInterval(this._timer);
        this._timer = null;
    }
    
    updateTime() {
        const now = moment();
        const diff = EVENT_DATETIME.diff(now);
        const diffDuration = moment.duration(diff);
        
        const days =  Math.floor(diffDuration.asDays());
        const hours = diffDuration.hours();
        const minutes = diffDuration.minutes();
        const seconds = diffDuration.seconds();
        
        const duration = {
            days, hours, minutes, seconds
        };
        
        if (!isEqual(duration, this.state.duration)) {
            this.setState({duration});
        }
    }

    render() {
        const { days, hours, minutes, seconds } = this.state.duration;
        
        return (
            <div>
                <div className="level is-mobile">
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Days</p>
                            <p className="title">{days}</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Hours</p>
                            <p className="title">{hours}</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Minutes</p>
                            <p className="title">{minutes}</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Seconds</p>
                            <p className="title">{seconds}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Countdown;