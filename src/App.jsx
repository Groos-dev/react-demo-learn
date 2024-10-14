import { useRef } from "react";
import "./App.css";
import InputComponent from "./InputComponent";
function App() {
    const inputComponent = useRef(null);
    function focusInput() {
        inputComponent.current.focus();
    }
    return (
        <>
            <InputComponent type="text" ref={inputComponent} />
            <button onClick={focusInput}>focus</button>
        </>
    );
}

export default App;
