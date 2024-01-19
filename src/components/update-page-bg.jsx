const UpdatePageBG = () => {
    const modifyPageDOM = async () => {
        let [tab] = await chrome.tabs.query({
            active: true,
            currentWindow: true,
        });

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => {
                document.body.style.backgroundColor = "rgb(138,180,248)";
            },
        });
    };

    return (
        <div>
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
