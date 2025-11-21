import { Menu } from "lucide-react";
import Modal from "./Modal";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return (
        <div className="content-center p-3">
            <button
                onClick={openModal}
                className="bg-bg"
                aria-label="Navigation Menu"
            >
                <Menu color="white" />
            </button>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <ul className="space-y-2 flex flex-col gap-4 text-lg">
                    <li>
                        <a href="#" className="hover:text-highlight">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-highlight">
                            A propos
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="hover:text-highlight">
                            Competences
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-highlight">
                            Projets
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-highlight">
                            Contact
                        </a>
                    </li>
                </ul>
            </Modal>
        </div>
    );
};

export default Navbar;
