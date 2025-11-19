import { useEffect, useState } from "react";
import About from "./components/Layout/About";
import Footer from "./components/Layout/Footer";
import Form from "./components/Form";
import Header from "./components/Layout/Header";
import Hero from "./components/Layout/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
    const [repos, setRepos] = useState(null);
    useEffect(() => {
        fetch("https://portfoliobackend-c34d.onrender.com/api/projects")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setRepos(data);
            });
    }, []);
    const [skills, setSkills] = useState(null);
    function getSkills() {
        fetch("https://portfoliobackend-c34d.onrender.com/api/skills")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setSkills(data);
            });
    }
    useEffect(() => {
        getSkills();
    }, []);
    return (
        <>
            <div className="main-content">
                <Header />
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
