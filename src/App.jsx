import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";
function App() {
    const [show, setShow] = useState(true);
    return (
        <>
            <TodoList></TodoList>
        </>
    );
}

export default App;
