import React from "react";

const Skills = ({ skills }) => {
    return (
        <section>
            <article>
                <h2 className="pb-6">Mes Compétences</h2>
                <div className="card-wrapper">
                    {skills &&
                        skills.map(({ _id, icon }) => (
                            <div key={_id} className="card skill-card">
                                <img src={icon} alt="skill icon" />
                            </div>
                        ))}
                </div>
            </article>
        </section>
    );
};

export default Skills;
