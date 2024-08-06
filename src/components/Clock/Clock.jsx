import "./Clock.scss";
import React, { useState, useEffect } from 'react';

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => (num < 10 ? `0${num}` : num);

  return (
    <div className="box">
      <div className="box__content">
        <p className="main">
          <span className="comp"> let</span> clock
          <span className="comp"> =</span>
          <span className="bracket"> &#123;</span>
        </p>
        <p>
          hour:
          <span className="num"> {formatNumber(currentTime.getHours())}</span>,
        </p>
        <p>
          minute:
          <span className="num"> {formatNumber(currentTime.getMinutes())}</span>,
        </p>
        <p>
          second:
          <span className="num"> {formatNumber(currentTime.getSeconds())}</span>,
        </p>
        <p>
          period: <span className="str"> "{currentTime.getHours() >= 12 ? 'PM' : 'AM'}"</span>,
        </p>
        <p>
          day:
          <span className="num"> {formatNumber(currentTime.getDate())}</span>,
        </p>
        <p>
          month:
          <span className="str"> "{currentTime.toLocaleString('en-us', { month: 'long' })}"</span>,
        </p>
        <p>
          year:
          <span className="num"> {currentTime.getFullYear()}</span>
        </p>
        <p className="main">
          <span className="bracket"> &#125;</span>;
        </p>
      </div>
    </div>
  );
}

export default Clock;
