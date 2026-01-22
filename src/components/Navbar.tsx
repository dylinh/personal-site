import Navblock from "./Navblock"

export default function Navbar(){
    return (
        <nav className="nav-container">
            <Navblock path="/about">about</Navblock>
            <Navblock path="/portfolio">projects</Navblock>
            <Navblock path="/blog">blog</Navblock>
        </nav>
    )
}