import React from "react";
import "../../style/CustomizedCard.css";

const CustomizedSwitchTag = ({ text, isSelected, onClick }) => {
    return (
        <div 
            className={`CustomizedSwitchTag ${isSelected ? 'selected' : 'unselected'}`} 
            onClick={onClick}
        >
            <p>{text}</p>
        </div>
    );
};

export default CustomizedSwitchTag;