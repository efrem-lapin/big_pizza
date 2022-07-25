import React, {memo} from "react";

import "./UI.scss";

const Button = memo(function ({ text, click = null }) {
    return (
        <button className="button" onClick={click}>{text}</button>
    )
});

export default Button;