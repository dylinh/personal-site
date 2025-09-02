import Navblock from "./Navblock"

export default function Navbar(){
    return (
        <nav className="nav-container">
            <Navblock path="/about">ABOUT</Navblock>
            <Navblock path="/portfolio">PORTFOLIO</Navblock>
            <Navblock path="/blog">BLOG</Navblock>
        </nav>
    )
}