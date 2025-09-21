import { IoChevronBack } from "react-icons/io5"
import { Link } from "react-router"

export default function BackButton({path}:{path: string}){
    return (
        <Link to={path}>
            <button className="back-btn">
                <IoChevronBack size={44} color="#F9F6EE"/>
            </button>
        </Link> 
    )
}