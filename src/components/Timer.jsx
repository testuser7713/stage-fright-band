import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = () => {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("2/27/2025 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {partyTime ? (
        <h1>Happy New Year!</h1>
      ) : (
        <div className="timer_main">
          <div className="timer_grid">
            <div>
              <h2 className="timer_value">{days}</h2>
              <h3 className="label">Days</h3>
            </div>
            <h4 className="timer_colon">:</h4>
            <div>
              <h2 className="timer_value">{hours}</h2>
              <h3 className="label">hrs</h3>
            </div>
            <h4 className="timer_colon">:</h4>
            <div>
              <h2 className="timer_value">{minutes}</h2>
              <h3 className="label">mins</h3>
            </div>
            <h4 className="timer_colon">:</h4>
            <div>
              <h2 className="timer_value">{seconds}</h2>
              <h3 className="label">secs</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timer;
