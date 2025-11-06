import React, { useState } from "react";

const Projects = () => {
    const [projects, setProjects] = useState([
        { id: 1, name: "Portfolio", description: "Personal portfolio website" },
        { id: 2, name: "E-commerce", description: "Online store project" },
    ]);

    const handleDelete = (id) => {
        setProjects(projects.filter((project) => project.id !== id));
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <ul>
                {projects.map((project) => (
                    <li key={project.id} className="mb-2">
                        <div className="flex justify-between">
                            <div>
                                <h3 className="text-xl">{project.name}</h3>
                                <p>{project.description}</p>
                            </div>
                            <button
                                className="text-red-500"
                                onClick={() => handleDelete(project.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;
