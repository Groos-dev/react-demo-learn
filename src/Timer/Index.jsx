import { useRef, useState } from "react";

function Timer() {
    const [time, setTime] = useState(new Date().getTime());
    const timer = useRef(null);
    function startTimer() {
        timer.current = setInterval(() => {
            setTime(new Date().getTime());
        }, 1000);
    }
    function cancelTimer() {
        clearInterval(timer.current);
    }
    return (
        <>
            <div>{new Date().getTime()}</div>
            <button onClick={cancelTimer}>stop</button>
            <button onClick={startTimer}>start</button>
        </>
    );
}

export default Timer;
