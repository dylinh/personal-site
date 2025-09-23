import { CiShare1 } from "react-icons/ci"

type ProjectCardProps = {
    title: string,
    date: string,
    desc: string,
    tags: string[],
    path: string
}

export default function ProjectCard({title, date, desc, tags, path}: ProjectCardProps){
    const tagElements = tags.map((element, index) => {
        return (
            <span key={index} className="project-tag">{element}</span>
    )})
    
    return (
        <a aria-label={`View Dylinh's ${title} project on GitHub.`} href={path} target="_blank" rel="noopener noreferrer">
            <div className="blog-card">
                <h2 className="blog-card-title">{title}</h2>
                <p className="blog-card-date">{date}</p>
                <p className="blog-card-desc">{desc}</p>
                <div className="tag-container">
                    {tagElements}
                </div>
                <CiShare1 size="20" className="share-icon"/>
            </div>
        </a>
    )
}