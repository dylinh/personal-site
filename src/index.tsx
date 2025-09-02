import React from "react"
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"

function App(){
    return (
    <Home/>
)
}

ReactDOM
    .createRoot(document.getElementById("root")!)
    .render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/resume"/>
            <Route path="/blog"/>
        </Routes>
    </BrowserRouter>
)