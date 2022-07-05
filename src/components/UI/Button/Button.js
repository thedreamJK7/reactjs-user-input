import React from "react";
import button from './Button.module.css';

const Button = (props) => {
    return (
            <button type={props.type} className={button.button} onClick={props.onClick}>
                {props.children}
            </button>
    );
};

export default Button;