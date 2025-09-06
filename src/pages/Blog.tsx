import BackButton from "../components/BackButton";
import BlogCard from "../components/BlogCard";

const blogPostsWithPath = [{
    title: "100 Days Without Social Media",
    date: "September 2, 2025",
    desc: "My reflections on the past one hundred days.",
    path: "/blog/social-media"
}]

export default function Blog(){
    return (
        <>
            <BackButton/>
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