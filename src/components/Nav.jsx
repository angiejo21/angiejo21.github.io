import { FileUser, Palette } from "lucide-react";
import { useTheme } from "../context/themeContext";
import Button from "./Button";
import NavLink from "./NavLink";

function Nav() {
  const { setIsColorOpen } = useTheme();

  return (
    <>
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
    </>
  );
}

export default Nav;
