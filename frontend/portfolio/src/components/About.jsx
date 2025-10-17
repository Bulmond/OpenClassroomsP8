import React from "react";

const About = () => {
    return (
        <div className="bg-primary flex h-1/2 content-center justify-center gap-5 p-6 text-white">
            <img
                className="hidden aspect-square max-w-1/4 rounded-full object-cover md:inline"
                src="src/assets/image.jpg"
                alt="avatar"
            />
            <div className="flex flex-col gap-6 md:ml-16 md:w-1/2">
                <h2 className="font-extrabold md:text-3xl">À propos de moi</h2>
                <p className="md:text-2xl">
                    Je suis passionné par la cybersécurité et l'informatique.
                    Aujourd'hui je suis en formation de développeur web. je
                    possède une affinité pour React et Tailwind qui ont rendu le
                    développement web très satisfaisant pour moi
                </p>
            </div>
        </div>
    );
};

export default About;
