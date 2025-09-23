import BackButton from "../components/BackButton";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";

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
        <>
            <BackButton path="/"/>
            <p className="about-title text-animation">BLOG</p>
            <div className="blog-card-container fade-in">
                {
                    blogPostsWithPath.map((post) => (
                        <BlogCard title={post.title} desc={post.desc} date={post.date} path={post.path}/>
                    ))
                }
            </div>
      </>
    )
}