import { useImmer } from "use-immer";

function Hello() {
    const [array, setArray] = useImmer([]);
    function clickItemHandler(value) {
        const action = {
            type: "remove",
            value: value,
        };
        dispatch(action);
    }

    const clickHandler = () => {
        setArray((draft) => {
            draft.push(draft.length);
        });
    };
    return (
        <>
            <div onClick={clickHandler}>add item</div>
            {array.map((item) => {
                return <div key={item}>{item}</div>;
            })}
        </>
    );
}

export default Hello;
