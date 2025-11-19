import React from "react";
import Navbar from "../Navbar";

const Header = () => {
    return (
        <header className="bottom-border-highlight flex h-16 w-full justify-end">
            <img
                src="logo2.svg"
                alt="header-logo"
                height={64}
                width={64}
                className="mr-auto"
            />
            <Navbar />
        </header>
    );
};

export default Header;
