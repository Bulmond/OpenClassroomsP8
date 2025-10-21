import About from "./About";
import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

function App() {
    return (
        <>
            <Header />
            <div className="main-content">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Form />
                <Footer />
            </div>
        </>
    );
}

export default App;
