import Navblock from "./Navblock"

export default function Navbar(){
    return (
        <nav className="nav-container">
            <Navblock path="/about">ABOUT</Navblock>
            <Navblock path="/projects">PROJECTS</Navblock>
            <Navblock path="/resume">RESUME</Navblock>
            <Navblock path="/blog">BLOG</Navblock>
        </nav>
    )
}