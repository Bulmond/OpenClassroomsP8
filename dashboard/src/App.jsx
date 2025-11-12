import "./style.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";
import Projects from "./components/Projects/Projects";
import Overview from "./components/Overview";
import Skills from "./components/Skills";
import Auth from "./components/Auth";

function App() {
    const [repos, setRepos] = useState(null);
    const [skills, setSkills] = useState(null);

    const fetchSkills = () => {
        fetch("http://localhost:10000/api/skills")
            .then((res) => res.json())
            .then((data) => setSkills(data));
    };

    useEffect(() => {
        fetch("http://localhost:10000/api/projects")
            .then((res) => res.json())
            .then((data) => setRepos(data));
        fetchSkills();
    }, []);

    const updateProject = (updatedProject) => {
        setRepos(
            repos.map((repo) =>
                repo._id === updatedProject._id ? updatedProject : repo,
            ),
        );
    };

    return (
        <main className="w-full">
            <Router>
                <Header />
                <div className="flex">
                    <Sidebar />
                    <Routes>
                        <Route path="/" element={<Overview />} />
                        <Route
                            path="/projects"
                            element={
                                <Projects
                                    repos={repos}
                                    updateProject={updateProject}
                                />
                            }
                        />
                        <Route
                            path="/skills"
                            element={
                                <Skills
                                    skills={skills}
                                    fetchSkills={fetchSkills}
                                />
                            }
                        />
                        <Route path="/login" element={<Auth />} />
                    </Routes>
                </div>
            </Router>
        </main>
    );
}

export default App;
