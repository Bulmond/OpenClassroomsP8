import React from "react";

const About = () => {
    return (
        <section className="flex-center gap-5">
            <img
                className="hidden aspect-square max-w-1/4 rounded-full object-cover md:inline"
                src="public/image.jpg"
                alt="avatar"
            />
            <div className="flex flex-col gap-6 md:ml-16 md:w-1/2">
                <h2>À propos de moi</h2>
                <p>
                    Je suis passionné par la cybersécurité et l'informatique.
                    Aujourd'hui je suis en formation de développeur web. je
                    possède une affinité pour React et Tailwind qui ont rendu le
                    développement web très satisfaisant pour moi
                </p>
            </div>
        </section>
    );
};

export default About;
