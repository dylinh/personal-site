import BackButton from "../components/BackButton"
import ProjectCard from "../components/ProjectCard"
import Footer from "../components/Footer"

export default function Portfolio(){
    return (
        <>
            <BackButton path="/"/>
            <p className="about-title text-animation">PORTFOLIO</p>
            <div className="blog-card-container fade-in">
                <ProjectCard desc="A responsive, mobile-first, and accessible personal website." date="September 18, 2025" title="Personal Website" tags={["Typescript", "React", "React Router", "Frontend"]} path="https://github.com/dylinh/personal-site" />
            </div>
        </>
    )
}