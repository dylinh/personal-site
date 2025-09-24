import BackButton from "../components/BackButton"
import ProjectCard from "../components/ProjectCard"

export default function Portfolio(){
    return (
        <>
            <BackButton path="/"/>
            <p className="about-title text-animation">PORTFOLIO</p>
            <div className="blog-card-container fade-in">
                <ProjectCard desc="A responsive, mobile-first, and accessible personal website." date="September 18, 2025" title="Personal Website" tags={["Typescript", "React", "React Router", "Frontend", "HTML/CSS"]} path="https://github.com/dylinh/personal-site" />
            </div>
        </>
    )
}