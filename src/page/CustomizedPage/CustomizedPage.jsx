import React, { useState } from "react";
import "../../style/CustomizedPage.css";
import CustomizedCard from "../../components/CustomizedCard";
import CustomizedSwitchTag from "../../components/CustomizedSwitchTag";



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
            { color: "#FFF44F", text: "檸檬" },
            { color: "#FF6347", text: "葡萄柚" },
            { color: "#4B0082", text: "黑加侖" },
            { color: "#FFA500", text: "覆盆子" },
            { color: "#A9DFBF", text: "綠茶" },
            { color: "#4682B4", text: "海水" },
            { color: "#ADD8E6", text: "雨水" },
            { color: "#FF69B4", text: "粉紅胡椒" },
            { color: "#FFA500", text: "橘子" },
            { color: "#A8E4A0", text: "綠蘋果" },
            { color: "#B0E0E6", text: "清新空氣" },
            { color: "#D1E231", text: "梨子" }
        ],
        "中調": [
            { color: "#FFE5B4", text: "桃子" },
            { color: "#FDF5E6", text: "玫瑰" },
            { color: "#FDF5E6", text: "茉莉" },
            { color: "#FFFFFF", text: "百合" },
            { color: "#8A2BE2", text: "紫羅蘭" },
            { color: "#DEB887", text: "杏仁" },
            { color: "#D2691E", text: "肉桂" },
            { color: "#800000", text: "丁香" },
            { color: "#2E8B57", text: "迷迭香" },
            { color: "#98FF98", text: "薄荷" },
            { color: "#E6E6FA", text: "薰衣草" },
            { color: "#9ACD32", text: "鼠尾草" }
        ],
        "後調": [
            { color: "#D2B48CF", text: "檀香" },
            { color: "#556B2F", text: "香根草" },
            { color: "#A52A2A", text: "雪松" },
            { color: "#F5DEB3", text: "香草" },
            { color: "#FFBF00", text: "琥珀" },
            { color: "#FFFACD", text: "乳香" },
            { color: "#FAF0E6", text: "麝香" },
            { color: "#D2B48C", text: "煙草" },
            { color: "#C68E17", text: "焦糖" },
            { color: "#D2691E", text: "巧克力" },
            { color: "#B87333", text: "樹脂" },
            { color: "#A9A9A9", text: "龍涎香" }
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
                <div className="CustomizedBottle">
                </div>
                <div className="CustomizedColor" style={{ background: backgroundGradient }}>
                </div>
            </div>
        </div>
    );
};

export default Customized;