import Card from "./Card";

const Projects = ({ repos, updateProject }) => {
    return (
        <section>
            <article>
                <h2 className="pb-6">Mes Projets</h2>
                {repos ? <Card repos={repos} updateProject={updateProject} /> : <p>Loading projects...</p>}
            </article>
        </section>
    );
};

export default Projects;
