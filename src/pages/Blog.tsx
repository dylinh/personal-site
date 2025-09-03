import BackButton from "../components/BackButton";
import BlogCard from "../components/BlogCard";

const blogPostsWithPath = [{
    title: "4 Months of Frontend Development",
    date: "September 2, 2025",
    desc: "Over the summer, I decided to learn something new.",
    path: "/blog/four-months-frontend"
}]

export default function Blog(){
    return (
        <>
            <BackButton/>
            <p className="about-title text-animation">Blog</p>
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