import BackButton from "../components/BackButton";
import BlogCard from "../components/BlogCard";

const blogPostsWithPath = [
    {
        title: "4 Months of Frontend Development",
        date: "September 13, 2025",
        desc: "",
        path: "/blog/frontend"
    },
    {
        title: "Graduation & Growth",
        date: "May 9, 2026",
        desc: "",
        path: "/blog/growth"
    }, {
        title: "Thoughts",
        date: "May 17, 2026",
        desc: "",
        path: "/blog/thoughts"
    },
    {
        title: "Book Recommendaitons",
        date: "May 21, 2026",
        desc: "",
        path: "/blog/books"
    }
]

export default function Blog(){
    return (
        <div className="about-page fade-in">
            <div className="about-header">
                <BackButton className="backbtn-about" path="/"/>
                <p className="about-title">blog</p>
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