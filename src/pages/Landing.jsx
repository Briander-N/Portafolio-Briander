import About from "../components/about/About"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Objective from "../components/objective/Objective"
import Project from "../components/project/Project"

const Landing = () => {
    return (
        <>
            <Header />
            <About />
            <Objective />
            <Project />
            <Footer/>
        </>
    )
}

export default Landing