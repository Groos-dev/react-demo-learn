import { useRef } from "react";
import "./App.css";
function App() {
    const inputElement = useRef(null);
    function focusInput() {
        inputElement.current.focus();
    }
    return (
        <>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>focus</button>
        </>
    );
}

export default App;
