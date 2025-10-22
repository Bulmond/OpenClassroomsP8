import { useEffect, useState } from "react";
import About from "./About";
import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

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
    return (
        <>
            <Header />
            <div className="main-content">
                <Hero />
                <About />
                <Skills />
                <Projects repos={repos} />
                <Form />
                <Footer />
            </div>
        </>
    );
}

export default App;
