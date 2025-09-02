import { IoChevronBack } from "react-icons/io5"
import {Link} from "react-router"

export default function BackButton(){
    return (
        <Link to="/">
            <button className="back-btn">
                <IoChevronBack size={44} color="#F9F6EE"/>
            </button>
        </Link> 
    )
}