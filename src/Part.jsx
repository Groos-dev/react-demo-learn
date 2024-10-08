import PropTypes from "prop-types"; // Add this import

function Part({ text, show, setShow }) {
    const clickHandler = () => {
        console.log(show);
        setShow(show);
    };
    return (
        <>
            <button onClick={clickHandler}>button-{text}</button>
            {show ? <div style={{ color: "red" }}>{text}</div> : null}
        </>
    );
}

export default Part;
Part.propTypes = {
    text: PropTypes.string.isRequired, // Validate 'text' prop
};
