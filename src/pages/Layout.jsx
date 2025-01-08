import { Outlet } from "react-router";
import { useTheme } from "../context/themeContext";
import Header from "../components/Header";
import ColorPicker from "../components/ColorPicker";
import Bubbles from "../components/Bubbles";

function Layout() {
  const { themeColor, isColorOpen } = useTheme();

  return (
    <div
      className={`h-screen w-screen grid grid-rows-[4rem_1fr_2.5rem] bg-background text-foreground theme-${themeColor}`}
    >
      <Header />
      <main className="row-start-2 flex flex-col items-center overflow-y-scroll">
        <Outlet />
      </main>
      {isColorOpen && <ColorPicker />}
      <Bubbles />
      <footer className="z-20 row-start-3 flex items-center justify-center ">
        Built by <span className="text-accent px-3">Angela Bellò</span> | &copy;{" "}
        {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default Layout;
