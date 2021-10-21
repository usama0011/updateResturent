import Footer from "./footer";
import NavBar from "./navbar";

export default function Layout({children}) {
    return (
        <div className="overflow-x-hidden">
            <NavBar />
            <main className="">
                {children}
            </main>
            <Footer />
        </div>
    )
}
