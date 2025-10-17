import React from "react";
import Button from "./Button";
import { Github } from "lucide-react";

const Hero = () => {
    return (
        <section className="bg-background flex h-1/4 w-full flex-col gap-2 p-6 md:p-24">
            <div className="flex flex-col md:w-1/3">
                <h1 className="bold md:text text-4xl font-extrabold">
                    Filipe Motta
                </h1>
                <h2 className="pt-6l">
                    Developpeur Front-End
                </h2>
                <p className="pt-6">
                    Developpeur Front-End autodidacte, je suis passioné par le
                    développement web et la programmation depuis mes 15 ans
                </p>
                <div className="flex justify-center gap-4 pt-6">
                    <Button className="bg-accent">
                        <span className="">Entrez en Contact</span>
                    </Button>
                    <Button>
                        <Github />
                        <span>Github</span>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
