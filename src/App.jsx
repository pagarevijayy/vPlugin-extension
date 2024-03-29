import viteLogo from "/vite.svg";
import Counter from "./components/counter";
import DadJoke from "./components/dad-joke";
import UpdatePageBG from "./components/update-page-bg";
import ColorPicker from "./components/color-picker";

import "./App.css";

function App() {
    return (
        <>
            <div>
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </div>
            <h1>vPlugin</h1>
            <div className="card">
                <Counter />
                <DadJoke />
                <UpdatePageBG />
                <ColorPicker />
            </div>
        </>
    );
}

export default App;
