import { forwardRef } from "react";

const InputComponent = forwardRef(({ ...props }, ref) => {
    return (
        <input style={{ height: "33.2px" }} type="text" ref={ref} {...props} />
    );
});

export default InputComponent;
