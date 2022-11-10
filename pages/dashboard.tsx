import Header from './header'
import Navbar from './nav'
import Footer from './footer'

export default function Dashboard() {
    return (
        <>
        <Header />
        <Navbar />
        {/* centered h1 using react-bootstrap */}
        <h1 className="text-center m-5">Dashboard Stuff Goes Here</h1>
        <Footer />
        </>
    )
}