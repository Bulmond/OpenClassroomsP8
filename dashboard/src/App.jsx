import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Sidebar from "./components/Layout/Sidebar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
    return (
        <Router>
            <div className="flex h-screen">
                <Sidebar />
                <div className="flex-1">
                    <Header />
                    <main className="p-4">
                        <Routes>
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/skills" element={<Skills />} />
                        </Routes>
                    </main>
                </div>
            </div>
        </Router>
    );
}

export default App;
