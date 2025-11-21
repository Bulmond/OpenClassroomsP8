import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = ({ setAuth }) => {
    return (
        <>
            <Header />
            <Sidebar setAuth={setAuth} />
            <Outlet />
        </>
    );
};

export default Dashboard;
