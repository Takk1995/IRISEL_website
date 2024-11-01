import React from "react";
import "../../Style/CustomizedCard.css";

const CustomizedCard = ({ text, color,onClick }) => {
    return (
        <div className="CustomizedCard" onClick={onClick}>
            <div className="CustomizedCricle" style={{ backgroundColor: color }}>
            <p className="CustomizedCricleText">{text}</p>
            </div>
        </div>
    );
};

export default CustomizedCard;