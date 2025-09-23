import { VscChevronLeft } from "react-icons/vsc";
import { Link } from "react-router"

export default function BackButton({path}:{path: string}){
    return (
        <Link to={path}>
            <button className="back-btn">
                <VscChevronLeft size={44} color="#F9F6EE"/>
            </button>
        </Link> 
    )
}