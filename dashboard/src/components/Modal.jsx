import React from "react";
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-modal z-50 flex justify-center items-center">
            <div className="bg-bg-light p-5 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 flex-center flex-col">
                <div className="flex w-full justify-end">
                    <button
                        onClick={onClose}
                        className="hover:text-highlight bg-transparent border-none"
                    >
                        <X size={24} />
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;
