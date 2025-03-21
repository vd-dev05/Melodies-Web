import { Link } from "react-router";
const NavBarMobile = () => {
    return (
        <div>
            NavBar Mobile
        </div>

    );
}
const MenuBarMobile = () => {
    return (
        <nav className="fixed bottom-0 left-0 w-full bg-white shadow-lg border-t flex justify-around p-3 z-50">
            <Link to="/" className="text-gray-600">🏠 Home</Link>
            <Link to="/discover" className="text-gray-600">🎵 Music</Link>
            <Link to="/albums" className="text-gray-600">🔍 Search</Link>
            <Link to="/library" className="text-gray-600">👤 Profile</Link>
        </nav>
    );
}
export {
    NavBarMobile,
    MenuBarMobile
}