import { FileUser, Palette } from "lucide-react";
import Button from "./Button";
import { Link, useLocation } from "react-router";
import NavLink from "./NavLink";
import { useTheme } from "../context/themeContext";
import DropdownNav from "./DropdownNav";

function Header() {
  const { pathname } = useLocation();
  const { isColorOpen, setIsColorOpen } = useTheme();

  const isPageHello = pathname === "/";
  return (
    <header
      className={`row-start-1 w-full h-16 fixed top-0 z-20 flex justify-between items-center px-4 ${
        isPageHello ? "opacity-0" : "opacity-100"
      }`}
    >
      <Link to="/">
        <div className="relative bg-primary w-8 aspect-square rounded-full after:content-[''] after:w-6 after:aspect-square after:bg-background after:absolute after:z-30 after:rounded-full after:top-1 after:left-1 hover:scale-105"></div>
      </Link>
      <nav className="hidden sm:flex gap-4 items-center">
        <NavLink to="/welcome">Home</NavLink>
        <NavLink to="/about-me">About me</NavLink>
        <NavLink to="/coding">Coding</NavLink>
        <NavLink to="/contact-me">Contact</NavLink>
        <Button variant="nav" type="resume">
          <FileUser /> Resume
        </Button>
        <Button variant="icon" onclick={() => setIsColorOpen((prev) => !prev)}>
          <Palette />
        </Button>
      </nav>
      <DropdownNav />
    </header>
  );
}

export default Header;
