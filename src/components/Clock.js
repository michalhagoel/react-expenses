
import './Clock.css'

import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <center>
        <div>
            <h2>Current Time</h2>
            <h2>{time.toLocaleTimeString()}</h2>
        </div>
    </center>
  );
};

export default Clock;
