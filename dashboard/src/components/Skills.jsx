import { Plus, Trash2 } from "lucide-react";
import React, { useState } from "react";
import Modal from "./Modal";

const Skills = ({ skills, fetchSkills }) => {
    const [skill, setSkill] = useState({ name: "", icon: "" });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        setSkill({ name: "", icon: "" });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSkill((prevSkill) => ({ ...prevSkill, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://portfoliobackend-c34d.onrender.com/api/skills", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(skill),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                fetchSkills();
                closeModal();
            });
    };

    const handleDelete = (id) => {
        fetch(`https://portfoliobackend-c34d.onrender.com/api/skills/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                fetchSkills();
            });
    };

    return (
        <section>
            <article>
                <h2 className="pb-6">Mes Compétences</h2>
                <div className="card-wrapper">
                    {skills &&
                        skills.map(({ _id, icon, name }) => (
                            <div key={_id} className="card skill-card">
                                <img src={icon} alt={`${name} icon`} />
                                <div
                                    className="delete-icon absolute inset-0 bg-black bg-opacity-50 flex-center cursor-pointer"
                                    onClick={() => handleDelete(_id)}
                                >
                                    <Trash2
                                        className="w-1/2 h-1/2"
                                        color="white"
                                    />
                                </div>
                            </div>
                        ))}
                    <div className="card skill-card">
                        <button
                            onClick={openModal}
                            className="bg-transparent border-2 border-dashed border-border-muted h-full w-full flex-center"
                        >
                            <Plus className="w-full h-1/2" strokeWidth={2} />
                        </button>
                    </div>
                </div>
            </article>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <form
                    onSubmit={handleSubmit}
                    className="flex-center flex-col gap-4"
                >
                    <h3 className="text-lg font-bold">
                        Ajouter une compétence
                    </h3>
                    <input
                        type="text"
                        name="name"
                        value={skill.name}
                        onChange={handleInputChange}
                        className="p-2 border rounded"
                        placeholder="Skill name"
                    />
                    <input
                        type="text"
                        name="icon"
                        value={skill.icon}
                        onChange={handleInputChange}
                        className="p-2 border rounded"
                        placeholder="Icon URL"
                    />
                    <button
                        type="submit"
                        className="bg-primary p-2 rounded hover:bg-highlight"
                    >
                        Ajouter
                    </button>
                </form>
            </Modal>
        </section>
    );
};

export default Skills;
