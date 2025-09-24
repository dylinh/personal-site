import imgUrl from "../assets/dylinh3.jpg"
import BackButton from "../components/BackButton";

export default function About(){
    return(
            <div className="about-page">
                    <BackButton path={"/"}/>
                    <div className="about-container">
                        <p className="about-title text-animation">ABOUT</p>
                        <div className="fade-in">
                            <div className="img-container">
                                <img src={imgUrl} className="about-img" alt="A headshot of Dylinh smiling in a purple dress shirt."/>
                            </div>
                            <div className="writing-container">
                                <p className="writing">Hey, my name is Dylinh Bun. I'm a fourth year Computer Science student at Wilfrid Laurier University with experience in both web development and data science. At Loblaws, I automated financial reporting in Python, saving time for a finance team every week.<br/><br/>My main focus now is software development and web applications. I work with HTML, CSS, JavaScript, React, accessibility, and UI design to develop websites that are well designed and performant across devices.</p>
                                <p className="writing"><br/> In my free time I enjoy swimming, running, writing, and spending time with my family and friends.<br/><br/>I'm currently open to Winter 2026 internships, May 2026 new grad roles and freelance opportunities in software development.<br/><br/>Looking to connect? <a href="mailto:contact@dylinh.com" className="bold" >contact@dylinh.com</a></p>
                            </div>
                        </div>
                    </div>
            </div>
    )
}