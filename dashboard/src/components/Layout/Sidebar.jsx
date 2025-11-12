import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ setAuth }) => {
    const navigate = useNavigate();
    const disconnect = () => {
        localStorage.clear();
        setAuth(null);
        navigate("/login");
    };
    return (
        <div className="w-64 h-screen bg-bg border-r-2 border-border text-white p-4">
            <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
            <ul>
                <li className="mb-4">
                    <Link to="/" className="hover:text-highlight">
                        Overview
                    </Link>
                </li>
                <li className="mb-4">
                    <Link to="/projects" className="hover:text-highlight">
                        Projects
                    </Link>
                </li>
                <li className="mb-4">
                    <Link to="/skills" className="hover:text-highlight">
                        Skills
                    </Link>
                </li>
                <li className="mb-4">
                    <a onClick={disconnect} className="hover:text-highlight">
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
