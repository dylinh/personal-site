import { FaLinkedin } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";

type FooterProps = {
  className?: string;
};

export default function Footer({className}: FooterProps){
    return (
    <footer className={className} >
        <a href="https://github.com/dylinh" aria-label="Dylinh's GitHub profile containing his projects." target="_blank" rel="noopener noreferrer"><GrGithub className="icon" size={45}/></a>
    </footer>
    )
}