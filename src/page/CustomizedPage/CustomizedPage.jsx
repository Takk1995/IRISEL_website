import React, { useState } from "react";
import "../Style/CustomizedPage.css";
import CustomizedCard from "../components/CustomizedCard";
import CustomizedSwitchTag from "../components/CustomizedSwitchTag";

const Customized = () => {
    const [selectedTag, setSelectedTag] = useState("前調");
    const [gradients, setGradients] = useState({
        "前調": "#FF5733",
        "中調": "#33FF57",
        "後調": "#0057FF"
    });

    const handleTagClick = (tag) => {
        setSelectedTag(tag);
    };

    const handleCardClick = (color) => {
        setGradients(prevGradients => ({
            ...prevGradients,
            [selectedTag]: color
        }));
    };

    const data = {
        "前調": [
            { color: "#FF5733", text: "前調1" },
            { color: "#33FF57", text: "前調2" },
            { color: "#0057FF", text: "前調3" },
            { color: "#F333FF", text: "前調4" },
            { color: "#FF5733", text: "前調5" },
            { color: "#33FF57", text: "前調6" },
            { color: "#0057FF", text: "前調7" },
            { color: "#F333FF", text: "前調8" },
            { color: "#FF5733", text: "前調9" },
            { color: "#33FF57", text: "前調10" },
            { color: "#0057FF", text: "前調11" },
            { color: "#F333FF", text: "前調12" }
        ],
        "中調": [
            { color: "#FF33A1", text: "中調1" },
            { color: "#33FFF5", text: "中調2" },
            { color: "#F5FF33", text: "中調3" },
            { color: "#FF8C33", text: "中調4" }
        ],
        "後調": [
            { color: "#8C33FF", text: "後調1" },
            { color: "#33FF8C", text: "後調2" },
            { color: "#FF3333", text: "後調3" },
            { color: "#33FF33", text: "後調4" }
        ]
    };

    const backgroundGradient = `linear-gradient(
        to bottom,
        ${gradients["前調"]},
        ${gradients["中調"]},
        ${gradients["後調"]}
    )`;

    return (
        <div className="CustomizedBackground">
            {/* <div className="CustomizedBackgroundGradient" style={{ background: backgroundGradient }}></div> */}
            <div className="CustomizedSwitchTagSide">
                <CustomizedSwitchTag 
                    text="前調" 
                    isSelected={selectedTag === "前調"} 
                    onClick={() => handleTagClick("前調")} 
                />
                <CustomizedSwitchTag 
                    text="中調" 
                    isSelected={selectedTag === "中調"} 
                    onClick={() => handleTagClick("中調")} 
                />
                <CustomizedSwitchTag 
                    text="後調" 
                    isSelected={selectedTag === "後調"} 
                    onClick={() => handleTagClick("後調")} 
                />
            </div>
            <div className="CustomizedLeft">
                {data[selectedTag].map((item, index) => (
                    <CustomizedCard
                        key={index}
                        text={item.text}
                        color={item.color}
                        onClick={() => handleCardClick(item.color)}
                    />
                ))}
            </div>
            <div className="CustomizedRight">
                <div className="CustomizedBuyingButton" style={{ background: backgroundGradient }}>
                    <p>購買</p>
                </div>
            </div>
        </div>
    );
};

export default Customized;