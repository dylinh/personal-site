import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Blog from "./pages/Blog"
import Frontend from './blogPosts/Frontend'
import NotFound from './pages/NotFound'

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
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/blog/frontend" element={<Frontend/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
)