import BackButton from "../components/BackButton"
import ProjectCard from "../components/ProjectCard"

export default function Portfolio(){
    return (
        <>
            <BackButton/>
            <p className="about-title text-animation">PORTFOLIO</p>
            <div className="blog-card-container">
                <ProjectCard/>
            </div>
        </>
    )
}