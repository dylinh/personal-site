import BackButton from "../components/BackButton"
import ProjectCard from "../components/ProjectCard"

export default function Portfolio(){
    return (
        <div className="about-page fade-in">
            <div className="about-header">
                <BackButton className="backbtn-about" path="/"/>
                <p className="about-title text-animation">PORTFOLIO</p>
            </div>
            <div className="blog-card-container">
                <ProjectCard desc="A responsive, mobile-first, and accessible personal website." date="September 18, 2025" title="Personal Website" tags={["Typescript", "React", "Frontend"]} path="https://github.com/dylinh/personal-site" />
            </div>
        </div>
    )
}