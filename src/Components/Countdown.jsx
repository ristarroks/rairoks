import React, {useState, useEffect} from 'react'

const Countdown = () => {
    const [time, setTime] = useState(15 * 60);

    useEffect(() => {
      // Set up the interval to update the timer every second
      const interval = setInterval(() => {
        setTime(prevTime => {
          if (prevTime <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
  
      // Clean up the interval on component unmount
      return () => clearInterval(interval);
    }, []);
  
    // Convert the time in seconds to MM:SS format
    const formatTime = time => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };
  
    return (
        formatTime(time)
    );
  }

export default Countdown
