import imgUrl from "../assets/dylinh3.jpeg"
import BackButton from "../components/BackButton";

export default function About(){
    return(
            <div className="about-page fade-in">
                    <div className="about-container">
                        <div className="about-header">
                            <BackButton className="backbtn-about" path={"/"}/>
                            <p className="about-title">about</p>
                        </div>
                        <div>
                            <div className="img-container">
                                <img src={imgUrl} className="about-img" alt="A headshot of Dylinh smiling in a purple dress shirt."/>
                            </div>
                            <div className="writing-container">
                                <p className="writing">I'm a CS grad from Laurier. This website is where I'll be showcasing my significant projects and writing blog posts about tech, business, and life. I enjoy spending time being outdoors, reading books, and trying new things. Feel free to contact me by email: <a href="mailto:bundylinh@gmail.com">bundylinh@gmail.com</a><br/></p>
                            </div>
                        </div>
                    </div>
            </div>
    )
}