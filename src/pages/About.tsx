import imgUrl from "../assets/dylinh3.jpg"
import BackButton from "../components/BackButton";

export default function About(){
    return(
            <div className="about-page fade-in">
                    <div className="about-container">
                        <div className="about-header">
                            <BackButton className="backbtn-about" path={"/"}/>
                            <p className="about-title">about me</p>
                        </div>
                        <div>
                            <div className="img-container">
                                <img src={imgUrl} className="about-img" alt="A headshot of Dylinh smiling in a purple dress shirt."/>
                            </div>
                            <div className="writing-container">
                                <p className="writing">hey, welcome to my website. i'm a fourth year cs major at laurier and interested in all things tech. I built this site after taking a course on front end development! this website is where i'll be showcasing my projects and blog posts related to tech and business.<br/></p>
                                <p className="writing"><br/>happy to connect: <a href="mailto:contact@dylinh.com" className="bold" >contact@dylinh.com</a></p>
                            </div>
                        </div>
                    </div>
            </div>
    )
}