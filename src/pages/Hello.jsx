import { Link } from "react-router";
import Button from "../components/Button.jsx";
import { useTheme } from "../context/themeContext.jsx";

function Hello() {
  const { isColorOpen, setIsColorOpen } = useTheme();
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="p-4 z-10 flex flex-col items-center text-center">
        <p className="text-5xl font-extrabold text-primary mb-4">
          Hello there!
        </p>
        <h1>My name is Angela and I love coding, languages and theatre.</h1>
        <Link to={"/welcome"} className="block mt-4">
          <Button variant={"primary"}>Come in</Button>
        </Link>
      </div>
      <div className="text-center p-4 cursor-pointer z-10">
        <p
          className={`underline underline-offset-2 hover:text-secondary ${
            isColorOpen ? "text-secondary" : ""
          }`}
          onClick={() => setIsColorOpen((prev) => !prev)}
        >
          How are you feeling today?
        </p>
      </div>
    </div>
  );
}

export default Hello;
