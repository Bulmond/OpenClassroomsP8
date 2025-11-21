import React from "react";
import { useState } from "react";

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
                                className="w-full justify-center block group relative"
                                key={repo._id}
                                href={repo.html_url}
                            >
                                <div className="project-card">
                                    <div className="image-wrapper">
                                        <img
                                            src={repo.img}
                                            alt={repo.name}
                                            className="project-image"
                                        />
                                    </div>

                                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-4 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        <p className="text-sm md:text-base line-clamp-6">
                                            {repo.description ||
                                                "Aucune description disponible."}
                                        </p>
                                    </div>

                                    <div className="project-card-title">
                                        <h3 className="font-semibold">
                                            {repo.name}
                                        </h3>
                                    </div>
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
                    <div className="card-wrapper grid-cols-1 place-content-center md:grid-cols-2 gap-6">
                        {otherRepos.map((repo) => (
                            <a
                                className="w-full justify-self-center group block"
                                key={repo._id}
                                href={repo.html_url}
                            >
                                <div className="project-card bg-white/5 hover:bg-white/10 transition">
                                    <h3 className="project-card-title">
                                        {repo.name}
                                    </h3>
                                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-4 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        <p className="text-sm line-clamp-6">
                                            {repo.description ||
                                                "Aucun descriptif disponible."}
                                        </p>
                                    </div>
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
