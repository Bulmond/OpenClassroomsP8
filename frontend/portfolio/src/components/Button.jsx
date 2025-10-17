import React from "react";

const Button = (props) => {
    return (
        <button className="bg-accent rounded-md">
            <div className="flex content-center justify-center gap-2 p-2">
                {props.children}
            </div>
        </button>
    );
};

export default Button;
