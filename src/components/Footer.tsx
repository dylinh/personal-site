import { GrGithub, GrLinkedinOption} from "react-icons/gr";
import { MdMail } from "react-icons/md";

export default function Footer(){
    return (
    <footer>
        <a href="https://github.com/dylinh" target="_blank" rel="noopener noreferrer"><GrGithub size={45}/></a>
        <a href="https://linkedin.com/in/dylinh" target="_blank" rel="noopener noreferrer"><GrLinkedinOption size={45}/></a>
        <a className="mail-logo" href="mailto:contact@dylinh.com" target="_blank" rel="noopener noreferrer"><MdMail size={45}/></a>
    </footer>
    )
}