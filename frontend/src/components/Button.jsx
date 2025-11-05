    import React from "react";

const Button = (props) => {
    return (
        <button>
            <div className="flex-center gap-2 p-2">
                {props.children}
            </div>
        </button>
    );
};

export default Button;
