import { Outlet } from "react-router";
import { useTheme } from "../context/themeContext";
import Header from "../components/Header";
import ColorPicker from "../components/ColorPicker";

function Layout() {
  const { themeColor, isColorOpen, setIsColorOpen } = useTheme();

  return (
    <div
      className={`h-screen w-screen grid grid-rows-[4rem_1fr_2.5rem] bg-background text-foreground theme-${themeColor}`}
    >
      <Header />
      <main className="row-start-2 flex flex-col justify-center items-center sm:before:content-[''] sm:before:w-1/3 sm:before:aspect-square sm:before:bg-gradient-to-tr sm:before:from-secondary sm:before:to-secondaryHover sm:before:opacity-20 sm:before:rounded-full sm:before:relative sm:before:top-48 sm:before:left-24 xl:before:left-56 sm:before:z-0 sm:after:content-[''] sm:after:w-1/4 sm:after:aspect-square sm:after:bg-gradient-to-tr sm:after:from-accent sm:after:to-accentHover sm:after:opacity-20 sm:after:rounded-full sm:after:relative sm:after:bottom-48 sm:after:right-16 xl:after:right-56 sm:after:z-0 overflow-hidden">
        <Outlet />
      </main>
      {isColorOpen && <ColorPicker setClose={setIsColorOpen} />}
      <footer className="row-start-3 flex items-center justify-center ">
        Built by <span className="text-accent px-3">Angela Bellò</span> | &copy;{" "}
        {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default Layout;
