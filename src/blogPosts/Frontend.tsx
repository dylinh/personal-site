import BackButton from "../components/BackButton"

export default function Frontend(){
    return (
        <>
        <div className="backbtn-blog-container">
            <BackButton className="backbtn-blog" path="/blog"/>
        </div>
        <div className="blog-post-container fade-in">
            <h2 className="blog-post-title">4 Months of Frontend Development</h2>
            <h3 className="blog-post-date">September 13, 2025</h3>
            <hr/>
            <p>At the beginning of the summer, I decided to start learning frontend development. I was inspired by Edmund Yong’s video on building profitable apps as a solo hacker and wanted to do the same thing myself. <br/><br/>I had no prior knowledge of web development, as I was only familiar with Python, Java, and C from classes. The only thing I knew was that you’re supposed to learn HTML, CSS, and JavaScript. I didn’t feel like watching YouTube videos because I thought it’d be too passive, and I thought purely project-based learning would be similar to building a house without an architect. I came across Scrimba, which offers a frontend developer course with 82.5 hours of content and solo projects. I paid for the subscription, and it was worth the price. I’m somebody who likes to have a laid-out structure when learning bigger topics, and the course is designed well. <br/><br/> The course is hands on and really gets you to drill the concepts into your head due to it's online IDE and lesson mixture. Throughout almost every lesson, there’ll be a time when the video stops and the instructor requries you to correctly type out the solution. I’d say taking the course cleared up a lot of misconceptions related to web development and opened my eyes to what is possible. Throughout the course, you work on several guided projects relating to HTML, CSS, JavaScript, User Interface Design, Accessibility, React, and Responsive Design. They also have solo projects for each module, where there’s a Figma design that you reference and ultimately implement.  Scrimba also had a course on TypeScript, so I completed that and used the language for my personal site. <br/><br/> I plan on continuing to improve my frontend skills and building more complex applications. There’s still a lot for me to learn, as I’m currently referencing roadmap.sh for topics I should be familiar with. In the future, I also want to learn backend development, which I’ll probably using boot.dev to learn the concepts.</p>
        </div>
        </>
    )
}