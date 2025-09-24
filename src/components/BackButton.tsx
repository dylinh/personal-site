import { VscChevronLeft } from "react-icons/vsc";
import { Link } from "react-router"

export default function BackButton({path, className}:{path: string, className?: string}){
    return (
        <Link aria-label="Go back" to={path}>
            <button className={`back-btn ${className}`}>
                <VscChevronLeft size={44} color="#F9F6EE"/>
            </button>
        </Link> 
    )
}