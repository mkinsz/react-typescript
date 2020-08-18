import React from "react";
import "./album.less";

const Album = () => {
    return (
        <div className="album-contain">
            <div className="wrapper">
                <div className="min-box">
                    <div className="item item1"></div>
                    <div className="item item2"></div>
                    <div className="item item3"></div>
                    <div className="item item4"></div>
                    <div className="item item5"></div>
                    <div className="item item6"></div>
                </div>
                <div className="max-box">
                    <div className="item item1"></div>
                    <div className="item item2"></div>
                    <div className="item item3"></div>
                    <div className="item item4"></div>
                    <div className="item item5"></div>
                    <div className="item item6"></div>
                </div>
            </div>
        </div>
    );
};

export default Album;
