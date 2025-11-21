import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Overview from "../Overview";
import Projects from "../Projects/Projects";
import Skills from "../Skills";

const Dashboard = ({ repos, skills, updateProject, setAuth, fetchSkills }) => {
    return (
        <>
            <Header />
            <div className="flex">
                <Sidebar setAuth={setAuth} />
                <Overview repos={repos} />
                <Projects repos={repos} updateProject={updateProject} />
                <Skills skills={skills} fetchSkills={fetchSkills} />
            </div>
        </>
    );
};

export default Dashboard;
