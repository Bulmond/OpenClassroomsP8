import React, { useState } from "react";
import Modal from "../Modal";

const Card = ({ repos, updateProject }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedProject(null);
    };

    const handleValorizedChange = (e) => {
        const updatedProject = {
            ...selectedProject,
            valorized: e.target.checked,
        };
        setSelectedProject(updatedProject);

        fetch(`http://localhost:10000/api/projects/${selectedProject._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ valorized: e.target.checked }),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                console.log("Project updated successfully:", data);
                updateProject(data);
            })
            .catch((error) => {
                console.error("Error updating project:", error);
            });
    };

    return (
        <>
            <div className="card-wrapper grid-cols-1 place-content-center md:grid-cols-2">
                {repos &&
                    repos
                        .sort(
                            (a, b) =>
                                (b.valorized ? 1 : 0) - (a.valorized ? 1 : 0),
                        )
                        .map((repo) => (
                            <div
                                key={repo._id}
                                className="card project-card"
                                onClick={() => openModal(repo)}
                            >
                                <h3>{repo.name}</h3>
                            </div>
                        ))}
            </div>
            <Modal isOpen={modalOpen} onClose={closeModal}>
                {selectedProject && (
                    <div className="project-modal">
                        <h2>{selectedProject.name}</h2>
                        <p>{selectedProject.description}</p>
                        <p>Language: {selectedProject.language}</p>
                        <a
                            href={selectedProject.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on GitHub
                        </a>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="valorized"
                                name="valorized"
                                checked={selectedProject.valorized || false}
                                onChange={handleValorizedChange}
                            />
                            <label htmlFor="valorized" className="ml-2">
                                Valorized
                            </label>
                        </div>
                    </div>
                )}
            </Modal>
        </>
    );
};

export default Card;
