import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className="bg-bg flex flex-col h-full w-64 p-4">
            <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
            <nav>
                <ul className="space-y-2">
                    <li>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                                isActive ? "text-highlight" : "text-white"
                            }
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/skills"
                            className={({ isActive }) =>
                                isActive ? "text-highlight" : "text-white"
                            }
                        >
                            Skills
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
