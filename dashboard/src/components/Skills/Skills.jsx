import React, { useState } from "react";

const Skills = () => {
    const [skills, setSkills] = useState(["React", "JavaScript", "CSS"]);

    const handleAddSkill = () => {
        const newSkill = prompt("Enter a new skill:");
        if (newSkill) {
            setSkills([...skills, newSkill]);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index} className="mb-2">
                        {skill}
                    </li>
                ))}
            </ul>
            <button
                className="mt-4 p-2 bg-highlight text-white"
                onClick={handleAddSkill}
            >
                Add Skill
            </button>
        </div>
    );
};

export default Skills;
