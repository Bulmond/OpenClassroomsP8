import React from "react";

const Card = ({ repos }) => {
    return (
        <div className="card-wrapper grid-cols-1 place-content-center md:grid-cols-2">
            {repos.map(({ id, name, full_name }) => (
                <a
                    className="w-full justify-self-center"
                    key={id}
                    href={`https://github.com/${full_name}`}
                >
                    <div className="card project-card">
                        <h3>{name}</h3>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default Card;
