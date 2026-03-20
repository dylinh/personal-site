import { FaLinkedin } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";

type FooterProps = {
  className?: string;
};

export default function Footer({className}: FooterProps){
    return (
    <footer className={className} >
        <a aria-label="Connect with Dylinh on LinkedIn." href="https://linkedin.com/in/dylinh" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon" size={45}/></a>
        <a href="https://github.com/dylinh" aria-label="Dylinh's GitHub profile containing his projects." target="_blank" rel="noopener noreferrer"><GrGithub className="icon" size={45}/></a>
    </footer>
    )
}