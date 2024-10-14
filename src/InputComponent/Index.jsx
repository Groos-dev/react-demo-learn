import { forwardRef } from "react";

const InputComponent = forwardRef(({ ...props }, ref) => {
    return <input type="text" ref={ref} {...props} />;
});

export default InputComponent;
