import React from "react"
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"

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
            <Route path="/projects"/>
            <Route path="/resume"/>
            <Route path="/blog"/>
            <Route path="/contact"/>
        </Routes>
    </BrowserRouter>
)