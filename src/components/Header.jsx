import { Link, useLocation } from "react-router";
import { useTheme } from "../context/themeContext";
import DropdownNav from "./DropdownNav";
import Nav from "./Nav";

function Header() {
  const { pathname } = useLocation();
  const { isColorOpen } = useTheme();
  const isPageHello = pathname === "/";

  return (
    <header
      className={`row-start-1 w-full h-16 fixed top-0 z-50 flex  justify-between items-center px-4 ${
        isPageHello ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <Link to="/">
        <div className="relative z-40 bg-primary w-8 aspect-square rounded-full after:content-[''] after:w-6 after:aspect-square after:bg-background after:absolute after:z-50 after:rounded-full after:top-1 after:left-1 hover:scale-105"></div>
      </Link>
      <nav className="hidden sm:flex gap-4 items-center">
        {!isColorOpen && <Nav />}
      </nav>
      <DropdownNav />
    </header>
  );
}

export default Header;
