import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, children }) => {
    // treat `isOpen` as a boolean
    const open = Boolean(isOpen);
    const [visible, setVisible] = useState(open);
    const [animState, setAnimState] = useState(""); // "enter" | "exit" | ""

    useEffect(() => {
        if (open) {
            setVisible(true);
            // next frame so the enter class is applied after mount
            requestAnimationFrame(() => setAnimState("enter"));
            return;
        }

        if (visible && !open) {
            setAnimState("exit");
            const t = setTimeout(() => {
                setVisible(false);
                setAnimState("");
            }, 300); // matches CSS animation duration
            return () => clearTimeout(t);
        }
    }, [open]);

    if (!visible) return null;

    return (
        <div
            className={`flex fixed inset-0 z-50 justify-end items-center ${animState === "enter" ? "modal-enter" : animState === "exit" ? "modal-exit" : ""}`}
        >
            <div
                className="absolute inset-0 bg-black/40 modal-backdrop"
                onClick={onClose}
            />

            <div className="bg-bg-light p-5 rounded-lg shadow-lg h-full w-11/12 md:w-1/2 lg:w-1/6 flex flex-col modal-content">
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
