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
        fetch("http://localhost:3000/api/projects")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setRepos(data);
            });
    }, []);
    const [skills, setSkills] = useState(null);
    useEffect(() => {
        fetch("http://localhost:3000/api/skills")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setSkills(data);
            });
    }, []);
    return (
        <>
            <Header />
            <div className="main-content">
                <Hero />
                <About />
                <Skills skills={skills} />
                <Projects repos={repos} />
                <Form />
            </div>
            <Footer />
        </>
    );
}

export default App;
