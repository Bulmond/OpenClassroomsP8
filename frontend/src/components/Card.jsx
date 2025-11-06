import React from "react";

const Card = ({ repos }) => {
    const valorizedRepos = repos.filter((repo) => repo.valorized);
    const otherRepos = repos.filter((repo) => !repo.valorized);

    return (
        <>
            {valorizedRepos.length > 0 && (
                <div className="valorized-projects-section">
                    <h3 className="text-center text-3xl font-bold mb-8">
                        Projets mis en avant
                    </h3>
                    <div className="card-wrapper grid-cols-1 place-content-center pb-8 md:grid-cols-2">
                        {valorizedRepos.map((repo) => (
                            <a
                                className="w-full justify-self-center"
                                key={repo._id}
                                href={repo.html_url}
                            >
                                <div className="card project-card">
                                    <h3>{repo.name}</h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            )}

            {otherRepos.length > 0 && (
                <div className="other-projects-section">
                    <h3 className="text-center text-3xl font-bold mb-8">
                        Autres projets
                    </h3>
                    <div className="card-wrapper grid-cols-1 place-content-center md:grid-cols-2">
                        {otherRepos.map((repo) => (
                            <a
                                className="w-full justify-self-center"
                                key={repo._id}
                                href={repo.html_url}
                            >
                                <div className="card project-card">
                                    <h3>{repo.name}</h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Card;
