import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";

export default function Layout() {
    return (
        <>
            <Navbar />
            <main className="mx-auto max-w-7xl px-6 py-8">
                <Outlet />
            </main>
        </>
    )
}