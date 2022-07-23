import React from "react";

import "./UI.scss";

const Button = ({ text, click = null }) => {
    return (
        <button className="button" onClick={click}>{text}</button>
    )
}

export default Button;