import React from "react";

import "./SelectorDrop.scss";

const SelectorDrop = ({items = []}) => {
    return (
        <ul className="selector_drop">
            {items.map(item => <li className="selector_item" key={item.id}>{item.title}</li>)}
        </ul>
    )
}

export default SelectorDrop;