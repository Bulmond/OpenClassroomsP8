import React from "react";
import Card from "./Card";

const Projects = ({ repos }) => {
    return (
        <section>
            <article>
                <h2 className="pb-6">Mes Projets</h2>
                {repos && <Card repos={repos} />}
            </article>
        </section>
    );
};

export default Projects;
