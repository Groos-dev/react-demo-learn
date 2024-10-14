import { useState } from "react";

function Timer() {
    const [time, setTime] = useState(new Date().getTime());

    const timer = setInterval(() => {
        setTime(new Date().getTime());
    }, 1000);
    function cancelTimer() {
        clearInterval(timer);
    }

    return (
        <>
            <div>{time}</div>
            <button onClick={cancelTimer}>stop</button>
        </>
    );
}

export default Timer;
