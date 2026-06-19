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
                <li>Making a Good Brain Great by Daniel Amen - Describes how to optimize your brain health.</li>
                <li>The Let Them Theory by Mel Robbins - Explains how your life improves when you stop trying to control others. </li>
                <li>i-Minds - How social media and the internet is creating changes in our lives</li>
            </ul>
        </div>
        </>
    )
}