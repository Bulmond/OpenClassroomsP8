import "./style.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Layout/Dashboard";
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
                <Routes>
                    <Route path="/login" element={<Auth setAuth={setAuth} />} />
                    <Route
                        path="/"
                        element={
                            <ProtectedRoutes auth={auth}>
                                <Dashboard
                                    repos={repos}
                                    skills={skills}
                                    updateProject={updateProject}
                                    fetchSkills={fetchSkills}
                                    setAuth={setAuth}
                                />
                            </ProtectedRoutes>
                        }
                    />
                </Routes>
            </Router>
        </main>
    );
}

export default App;
