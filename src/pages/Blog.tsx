import BackButton from "../components/BackButton";
import BlogCard from "../components/BlogCard";

export default function Blog(){
    return (
        <>
            <BackButton/>
            <p className="about-title text-animation">Blog</p>
            <div className="blog-card-container">
                <BlogCard title="4 Months of Frontend" date="September 2, 2025" desc="Over the summer, I decided to learn modern frontend development. "/>
            </div>
      </>
    )
}