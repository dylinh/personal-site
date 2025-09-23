import { GrGithub, GrLinkedinOption } from "react-icons/gr";
import { MdMail } from "react-icons/md";

type FooterProps = {
  className?: string;
};

export default function Footer({className}: FooterProps){
    return (
    <footer className={className} >
        <a href="https://github.com/dylinh" target="_blank" rel="noopener noreferrer"><GrGithub className="icon" size={45}/></a>
        <a href="https://linkedin.com/in/dylinh" target="_blank" rel="noopener noreferrer"><GrLinkedinOption className="icon" size={45}/></a>
        <a className="mail-logo" href="mailto:contact@dylinh.com" target="_blank" rel="noopener noreferrer"><MdMail className="icon" size={45}/></a>
    </footer>
    )
}