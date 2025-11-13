import "./style.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";
import Projects from "./components/Projects/Projects";
import Overview from "./components/Overview";
import Skills from "./components/Skills";
import Auth from "./components/Auth";
import { useAuth } from "./hooks/useAuth";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
    const [repos, setRepos] = useState(null);
    const [skills, setSkills] = useState(null);
    const [auth, setAuth] = useState(null);

    const { connectedUser } = useAuth();

    useEffect(() => {
        setAuth(connectedUser);
    }, [connectedUser]);

    const fetchSkills = () => {
        fetch("https://portfoliobackend-c34d.onrender.com/api/skills")
            .then((res) => res.json())
            .then((data) => setSkills(data));
    };

    useEffect(() => {
        fetch("https://portfoliobackend-c34d.onrender.com/api/projects")
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
                    {auth ? <Sidebar setAuth={setAuth} /> : null}
                    <Routes>
                        <Route
                            path="/login"
                            element={<Auth setAuth={setAuth} />}
                        />
                        <Route path="/" element={<Overview />} />
                        <Route element={<ProtectedRoutes auth={auth} />}>
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
                        </Route>
                    </Routes>
                </div>
            </Router>
        </main>
    );
}

export default App;
