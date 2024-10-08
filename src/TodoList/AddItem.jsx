import { useContext } from "react";
import dataContext from "./DataContext";
function AddItem() {
    const context = useContext(dataContext);
    function inputChangeHandler(inputValue) {
        const action = {
            type: "inputChange",
            value: inputValue,
        };
        context.dispatch(action);
    }
    function clickBtnHandler() {
        const action = {
            type: "add",
            value: context.data.inputValue,
        };
        console.log(action);
        context.dispatch(action);
    }
    return (
        <>
            <input
                type="text"
                value={context.data.inputValue}
                onChange={(e) => inputChangeHandler(e.target.value)}
            />{" "}
            <button onClick={clickBtnHandler}>submit</button>
        </>
    );
}

export default AddItem;
