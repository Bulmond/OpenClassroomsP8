import { useEffect, useState } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

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
            </div>
            <Footer />
        </>
    );
}

export default App;
