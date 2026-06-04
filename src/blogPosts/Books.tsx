import BackButton from "../components/BackButton"

export default function Books(){
    return (
        <>
        <div className="backbtn-blog-container">
            <BackButton className="backbtn-blog" path="/blog"/>
        </div>
        <div className="blog-post-container fade-in">
            <h2 className="blog-post-title">Book Recommendations</h2>
            <h3 className="blog-post-date">May 21, 2026</h3>
            <hr/>
            <ul>
                <li>Making a Good Brain Great by Daniel Amen - I can't put into words how important your brain health is and this book describes everything you need to do.</li>
                <li>The Let Them Theory by Mel Robbins - Essentially stop trying to control others overall good life advice </li>
            </ul>
        </div>
        </>
    )
}