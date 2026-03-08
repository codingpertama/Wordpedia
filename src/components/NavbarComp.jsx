import { Link } from "react-router-dom";

export default function NavbarComp() {
    return (
        <nav className="flex justify-between items-center px-10 py-5 border-b border-gray-200">
            <h1 className="text-xl font-bold">Word<span className="italic font-normal">pedia</span></h1>

            <ul className="flex gap-8 text-sm text-gray-500">
                <Link to="/" className="hover:text-black cursor-pointer">
                    Home
                </Link>
                <Link to="/about" className="hover:text-black cursor-pointer">
                    About
                </Link>
            </ul>
        </nav>
    )
}