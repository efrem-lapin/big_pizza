import React from "react";
import PostersItem from "../PostersItem/PostersItem";

import "./PosterList.scss";

const PostersList = ({ items = [], id }) => {
    return (
        <div className="posters" id={id}>
            <div className="container container_posters">
                <ul className="posters_list">
                    {items.map(item => <PostersItem key={item.id} text={item.text} image={item.image} />)}
                </ul>
            </div>
        </div>
    )
}

export default PostersList;