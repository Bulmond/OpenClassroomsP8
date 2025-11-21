import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";
import Projects from "./components/Projects/Projects";
import Overview from "./components/Overview";
import Skills from "./components/Skills";

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
