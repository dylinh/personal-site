import BackButton from "../components/BackButton";
import BlogCard from "../components/BlogCard";

const blogPostsWithPath = [
    {
        title: "4 Months of Frontend Development",
        date: "September 13, 2025",
        desc: "What I learned over the summer.",
        path: "/blog/frontend"
    },{
        title: "100 Days Without Social Media",
        date: "September 2, 2025",
        desc: "Reflections & thoughts.",
        path: "/blog/social-media"
    }]

export default function Blog(){
    return (
        <div className="about-page">
            <div className="about-header">
                <BackButton className="backbtn-about" path="/"/>
                <p className="about-title text-animation">BLOG</p>
            </div>
            <div className="blog-card-container fade-in">
                {
                    blogPostsWithPath.map((post, index) => (
                        <BlogCard key={index} title={post.title} desc={post.desc} date={post.date} path={post.path}/>
                    ))
                }
            </div>
      </div>
    )
}