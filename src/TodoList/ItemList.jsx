import { useContext } from "react";
import dataContext from "./DataContext";
function ItemList() {
    const context = useContext(dataContext);
    function clickItemHandler(value) {
        const action = {
            type: "remove",
            value: value,
        };
        context.dispatch(action);
    }

    return (
        <>
            {context.data.list.map((item) => {
                return (
                    <li
                        key={item.id}
                        onClick={() => clickItemHandler(item.value)}
                    >
                        {item.value}
                    </li>
                );
            })}
        </>
    );
}

export default ItemList;
