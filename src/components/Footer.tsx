import { FaLinkedin } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { MdMail } from "react-icons/md";

type FooterProps = {
  className?: string;
};

export default function Footer({className}: FooterProps){
    return (
    <footer className={className} >
        <a aria-label="Connect with Dylinh on LinkedIn." href="https://linkedin.com/in/dylinh" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon" size={45}/></a>
        <a href="https://github.com/dylinh" aria-label="Dylinh's GitHub profile containing his projects." target="_blank" rel="noopener noreferrer"><GrGithub className="icon" size={45}/></a>
        <a className="mail-logo" aria-label="Send Dylinh an Email."href="mailto:contact@dylinh.com" target="_blank" rel="noopener noreferrer"><MdMail className="icon" size={45}/></a>
    </footer>
    )
}