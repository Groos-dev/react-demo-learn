import { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(new Date().getTime());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().getTime());
    });
    return () => {
      clearInterval(timer);

    };
  });
  function cancelTimer() {
    clearInterval(time.current);
  }
  return (
    <>
      <div>{new Date().getTime()}</div>
      <button onClick={cancelTimer}>stop</button>
      <button onClick={time}>start</button>
    </>
  );
}

export default Timer;
