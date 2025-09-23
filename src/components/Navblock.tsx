import {NavLink} from "react-router";

export default function Navblock({children, path}:{children: string, path: string}){
    return (
        <div className="nav-block">
                <NavLink to={path}>
                    <p className="text-animation fade-in nav-block-link">{children}</p>
                </NavLink>
        </div>
    )
}