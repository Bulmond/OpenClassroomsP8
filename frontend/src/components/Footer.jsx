import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="flex-center h-32 flex-col">
            <div className="social-media">
                <a href="https://github.com/Bulmond">
                    <Github />
                </a>
                <a href="https://linkedin.com/in/luiz-filipe-motta-alves-7aa49b345">
                    <Linkedin />
                </a>
            </div>
            <span>© 2025 Filipe Motta, Tous droits réservés.</span>
        </footer>
    );
};

export default Footer;
