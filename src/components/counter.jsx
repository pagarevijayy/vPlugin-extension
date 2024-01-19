import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <button onClick={() => setCount(0)}>reset</button>
        </div>
    );
};

export default Counter;
