import React, { useState, useEffect } from "react";
import Card from "./Card";

const Projects = ({ repos }) => {
    const [selectedLanguage, setSelectedLanguage] = useState("Tous");
    const [availableLanguages, setAvailableLanguages] = useState([]);

    useEffect(() => {
        if (repos) {
            const languages = repos
                .map((repo) => repo.language)
                .filter(Boolean);
            const uniqueLanguages = ["Tous", ...new Set(languages)];
            setAvailableLanguages(uniqueLanguages);
        }
    }, [repos]);

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

    const filteredRepos = repos
        ? repos.filter(
              (repo) =>
                  selectedLanguage === "Tous" ||
                  repo.language === selectedLanguage,
          )
        : [];

    return (
        <section id="projects">
            <article>
                <h2 className="pb-6">Mes Projets</h2>
                <div className="mb-4 flex gap-2 justify-center">
                    {availableLanguages.map((language) => (
                        <button
                            key={language}
                            onClick={() => setSelectedLanguage(language)}
                            className={`px-4 py-2 rounded-md transition-colors ${
                                selectedLanguage === language
                                    ? "bg-secondary text-black"
                                    : "bg-primary text-gray-800 hover:bg-highlight"
                            }`}
                        >
                            {language}
                        </button>
                    ))}
                </div>
                {filteredRepos.length > 0 ? (
                    <Card repos={filteredRepos} />
                ) : (
                    <p>Oups, une erreur est parvenue</p>
                )}
            </article>
        </section>
    );
};

export default Projects;
