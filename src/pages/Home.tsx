import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Home(){
    return (
        <>
            <div className="layout">
                <Header/>
                <Footer className="footer-home"/>
            </div>
        </>
    )
}