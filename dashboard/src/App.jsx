import { useEffect, useState } from "react";
import "style.css";
import Header from "../../frontend/src/components/Header";

function App() {
    const [repos, setRepos] = useState(null);
    useEffect(() => {
        fetch("https://api.github.com/users/bulmond/repos")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setRepos(data);
            });
    }, []);
    console.log(repos);
    return (
        <>
            <Header />
        </>
    );
}

export default App;
