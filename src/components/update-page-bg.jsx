import { useState } from "react";

const UpdatePageBG = () => {
    let [color, setColor] = useState("#4287f5");

    const modifyPageDOM = async () => {
        let [tab] = await chrome.tabs?.query({
            active: true,
            currentWindow: true,
        });

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            args: [color],
            func: (color) => {
                document.body.style.backgroundColor = color;
            },
        });
    };

    return (
        <div>
            <input
                style={{ margin: "4px" }}
                type="color"
                value={color}
                onChange={(e) => {
                    setColor(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    modifyPageDOM();
                }}
            >
                Update Page Background
            </button>
        </div>
    );
};

export default UpdatePageBG;
