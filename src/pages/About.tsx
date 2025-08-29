import {Link} from "react-router"
import { IoChevronBack } from "react-icons/io5";
import imgUrl from "../assets/dylinh3.jpg"

export default function About(){
    return(
            <>
                <div className="fade-in">
                <Link to="/">
                    <button className="back-btn">
                        <IoChevronBack size={44} color="#F9F6EE"/>
                    </button>
                </Link>
                <div className="about-container">
                <p className="about-title text-animation">about</p>
                            <div className="img-container">
                    <img src={imgUrl} className="about-img"/>
                </div>
                <p className="writing">I'm currently studying Computer Science at Wilfrid Laurier University. I previously worked at Loblaws as a Data Science Intern where I automated financial reports in Python. <br/><br/>I'm knowledgeable in front-end development as I have working knowledge in HTML, CSS, JavaScript, React, A11Y, Responsive Design, and UI design.
                </p>
                <p className="writing"><br/>I'm from Cambridge, Ontario. My mom and dad came to Canada as refugees from Vietnam and Cambodia respectively. In my free time I enjoy swimming, running, writing, and spending time with my family and friends.</p>
                </div>
                </div>
            </>
    )
}
// My mom and dad came to Canada as refugees from Vietnam and Cambodia respectively. In my free time I enjoy swimming, running, writing, and spending time with my family and friends.