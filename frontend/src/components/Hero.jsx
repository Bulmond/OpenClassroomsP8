import React from "react";
import { Github } from "lucide-react";

const Hero = () => {
    return (
        <section className="flex flex-col gap-2">
            <div className="flex w-full flex-col lg:w-1/3">
                <h1 className="text-[min(8vw,36px)] font-extrabold">
                    Filipe Motta
                </h1>
                <h2 className="pt-6l">Developpeur Front-End</h2>
                <p className="pt-6">
                    Developpeur Front-End autodidacte, je suis passioné par le
                    développement web et la programmation depuis mes 15 ans
                </p>
                <div className="flex justify-center gap-4 pt-6">
                    <a href="#contact" className="button">
                        <span>Entrez en Contact</span>
                    </a>
                    <a href="https://github.com/Bulmond" className="button">
                        <Github />
                        <span>Github</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
