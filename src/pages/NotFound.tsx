import { Link } from "react-router"
import { IoHomeOutline } from "react-icons/io5";

export default function NotFound(){
    return (
        <div className="fade-in">
            <h2 className="text-animation error-text">Page does not exist :(</h2>
            <div className="home-btn-container">
                <Link className="home-btn text-animation" to={"/"}>
                Back to Home
                </Link>
            </div>
        </div>
    )
}