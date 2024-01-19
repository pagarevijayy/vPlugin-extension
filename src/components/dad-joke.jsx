import { useState } from "react";

const DadJoke = () => {
    const [joke, setJoke] = useState("Interested in Dad Jokes?");
    const [loading, setLoading] = useState(false);

    const fetchJoke = async () => {
        setLoading(true);
        const res = await fetch("https://icanhazdadjoke.com/slack");
        const joke = await res.json();
        setJoke(joke?.attachments[0]?.text);
        setLoading(false);
    };

    return (
        <div>
            {loading && <p>loading...</p>}
            {!loading && <p>{joke}</p>}

            <button
                onClick={() => {
                    fetchJoke();
                }}
            >
                New Joke
            </button>
        </div>
    );
};

export default DadJoke;
