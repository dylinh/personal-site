import BackButton from "../components/BackButton";
import BlogCard from "../components/BlogCard";

const blogPostsWithPath = [
    {
        title: "4 Months of Frontend Development",
        date: "September 13, 2025",
        desc: "What I learned over the summer.",
        path: "/blog/frontend"
    }]

export default function Blog(){
    return (
        <div className="about-page fade-in">
            <div className="about-header">
                <BackButton className="backbtn-about" path="/"/>
                <p className="about-title text-animation">BLOG</p>
            </div>
            <div className="blog-card-container">
                {
                    blogPostsWithPath.map((post, index) => (
                        <BlogCard key={index} title={post.title} desc={post.desc} date={post.date} path={post.path}/>
                    ))
                }
            </div>
      </div>
    )
}