import { useState } from "react";
import { FileUser, Menu, Palette, CircleX } from "lucide-react";
import { useTheme } from "../context/themeContext";
import Button from "./Button";
import NavLink from "./NavLink";

function DropdownNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isColorOpen, setIsColorOpen } = useTheme();

  return (
    <div className="sm:hidden ">
      <div className={`relative z-50 ${isColorOpen ? "hidden" : ""}`}>
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
      <div
        className={`absolute ${
          isMenuOpen ? "top-0" : "-top-[100vh]"
        } left-0 w-screen h-[50vh] backdrop-blur-md`}
      >
        <div className="w-screen flex flex-col text-xl">
          <div
            className={`${isColorOpen ? "opacity-0 pointer-events-none" : ""}`}
          >
            <div
              className="w-full flex flex-col justify-start items-center gap-4 mt-24"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <NavLink to="/welcome">Home</NavLink>
              <NavLink to="/about-me">About me</NavLink>
              <NavLink to="/coding">Coding</NavLink>
              <NavLink to="/contact-me">Contact</NavLink>
            </div>
            <div className="flex justify-between p-12">
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
        </div>
      </div>
    </div>
  );
}

export default DropdownNav;
