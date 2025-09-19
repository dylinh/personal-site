type ProjectCardProps = {
    title: string,
    date: string,
    desc: string,
    tags: string[]
}

export default function ProjectCard({title, date, desc, tags}: ProjectCardProps){
    let tag = ["Typescript", "React", "React Router", "Frontend"]
    const tagElements = tag.map((element) => {
        return (
            <span className="project-tag">{element}</span>
    )})
    
    return (
        <div className="blog-card">
            <h2 className="blog-card-title">Personal Website</h2>
            <p className="blog-card-date">September 18, 2025</p>
            <p className="blog-card-desc">A responsive, mobile-first, and accessible personal website.</p>
            <div className="tag-container">
                {tagElements}
            </div>
        </div>
    )
}