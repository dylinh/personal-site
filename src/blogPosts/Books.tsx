import BackButton from "../components/BackButton"

export default function Books(){
    return (
        <>
        <div className="backbtn-blog-container">
            <BackButton className="backbtn-blog" path="/books"/>
        </div>
        <div className="blog-post-container fade-in">
            <h2 className="blog-post-title">Book Recommendations</h2>
            <h3 className="blog-post-date">May 17, 2026</h3>
            <hr/>
            <ul>
                <p>Here is my growing list of book recommendations:</p>
                <li>Making a Good Brain Great by Daniel Amen - I can't put into words how important your brain health is and this book describes everything you need to do. </li>
            </ul>
        </div>
        </>
    )
}