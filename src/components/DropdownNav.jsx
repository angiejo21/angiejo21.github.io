import { useState } from "react";
import Button from "./Button";
import { FileUser, Menu, Palette, CircleX } from "lucide-react";
import { useTheme } from "../context/themeContext";
import NavLink from "./NavLink";

function DropdownNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isColorOpen, setIsColorOpen } = useTheme();

  return (
    <div className="sm:hidden relative">
      <div className="">
        <Button onclick={() => setIsMenuOpen((prev) => !prev)} variant="icon">
          {!isMenuOpen ? (
            <Menu className="opacity-100" />
          ) : (
            <CircleX className="opacity-0 hidden" />
          )}
          {!isMenuOpen ? (
            <Menu className="opacity-0 hidden" />
          ) : (
            <CircleX className="opacity-100" />
          )}
        </Button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-[150%] -right-0 w-64 h-96 backdrop-blur-md rounded-2xl border border-mutedForeground flex flex-col justify-between">
          <div
            className="w-full flex flex-col justify-start items-center gap-4 mt-10"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <NavLink to="/welcome">Home</NavLink>
            <NavLink to="/about-me">About me</NavLink>
            <NavLink to="/coding">Coding</NavLink>
            <NavLink to="/contact-me">Contact</NavLink>
          </div>
          <div className="flex justify-between p-5">
            <Button variant="nav" type="resume">
              <FileUser /> Resume
            </Button>
            <Button
              variant="icon"
              onclick={() => setIsColorOpen((prev) => !prev)}
            >
              <Palette />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownNav;
