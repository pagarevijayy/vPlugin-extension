import { useState } from "react";

const ColorPicker = () => {
    let [pickedColor, setPickedColor] = useState("");

    const handleColorPicker = async () => {
        let [tab] = await chrome.tabs?.query({
            active: true,
            currentWindow: true,
        });

        chrome.scripting.executeScript(
            {
                target: { tabId: tab.id },
                function: pickColor,
            },
            async (injectionResults) => {
                const [data] = injectionResults;
                if (data.result) {
                    const color = data?.result?.sRGBHex;
                    setPickedColor(color);

                    try {
                        await navigator.clipboard.writeText(color);
                    } catch (err) {
                        console.error(err);
                    }
                }
            },
        );
    };

    async function pickColor() {
        try {
            // Picker
            const eyeDropper = new EyeDropper();
            return await eyeDropper.open();
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <button
                onClick={() => {
                    handleColorPicker();
                }}
            >
                Color Picker
            </button>
            <div className="center">
                <span
                    style={{
                        display: "inline-block",
                        width: "20px",
                        height: "20px",
                        borderRadius: "2px",
                        backgroundColor: pickedColor,
                    }}
                ></span>
                <span className="color-value">{pickedColor}</span>
            </div>
        </div>
    );
};

export default ColorPicker;
