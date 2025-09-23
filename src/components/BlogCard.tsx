import { Link } from "react-router"
import { BsChevronRight } from "react-icons/bs";

type BlogCardProps = {
    title: string,
    desc: string,
    path: string,
    date: string,
    className?: string
}

export default function BlogCard({title, desc, path, date, className}: BlogCardProps){
    return (
        <Link to={path}>
            <div className={`blog-card ${className}`}>
                <h2 className="blog-card-title">{title}</h2>
                <p className="blog-card-date">{date}</p>
                <h3 className="blog-card-desc">{desc}</h3>
                <BsChevronRight size="20" className="blog-card-arrow"/>
            </div>
        </Link>
    )
}