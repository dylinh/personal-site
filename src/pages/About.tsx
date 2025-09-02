import imgUrl from "../assets/dylinh3.jpg"
import Footer from "../components/Footer";
import BackButton from "../components/BackButton";

export default function About(){
    return(
            <>
                <div className="fade-in">
                    <BackButton/>
                    <div className="about-container">
                    <p className="about-title text-animation">About</p>
                                <div className="img-container">
                        <img src={imgUrl} className="about-img"/>
                    </div>
                    <p className="writing">Hey, my name is Dylinh Bun. I'm a fourth year studying Computer Science at Wilfrid Laurier University. I previously worked at Loblaws as a Data Science Intern where I automated financial reports in Python. <br/><br/>My interest lies in web development as I have working knowledge in HTML, CSS, JavaScript, React, A11Y, Responsive Design, and UI design.
                    </p>
                    <p className="writing"><br/> In my free time I enjoy swimming, running, writing, and spending time with my family and friends.<br/><br/>I'm looking for Winter 2026 internships, May 2026 new grad roles and freelance opportunities in software development.</p>
                    </div>
                    <Footer/>
                </div>
            </>
    )
}