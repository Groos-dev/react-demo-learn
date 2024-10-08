import { useReducer } from "react";
import AddItem from "./AddItem";
import dataContext from "./DataContext";
import ItemList from "./ItemList";

function TodoList() {
    function dataReducer(state, action) {
        const newState = { ...state };
        switch (action.type) {
            case "inputChange":
                newState.inputValue = action.value;
                console.log("action", action);
                return newState;
            case "add":
                if (!action.value) {
                    return state;
                }
                newState.list = [
                    ...newState.list,
                    {
                        id: action.value,
                        value: action.value,
                    },
                ];
                newState.inputValue = "";
                return newState;
            case "remove":
                newState.list = newState.list.filter(
                    (item) => item.value !== action.value
                );
                return newState;
            default:
                return state;
        }
    }
    const [data, dispatch] = useReducer(dataReducer, {
        inputValue: "",
        list: [],
    });

    return (
        <>
            <dataContext.Provider value={{ data, dispatch }}>
                <AddItem />
                <ItemList />
            </dataContext.Provider>
        </>
    );
}

export default TodoList;
