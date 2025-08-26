import React from "react"
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home"

function App(){
    return (<Home/>)
}

ReactDOM
    .createRoot(document.getElementById("root")!)
    .render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
        </Routes>
    </BrowserRouter>
)