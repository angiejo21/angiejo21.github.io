import { CircleX } from "lucide-react";
import { useTheme } from "../context/themeContext";
import Button from "./Button";
import Colors from "./Colors";

function ColorPicker() {
  const { isColorOpen, setIsColorOpen } = useTheme();

  return (
    <>
      <div
        className={`absolute ${
          isColorOpen ? "top-0" : "-top-[100vh]"
        } left-0 w-screen h-1/2 backdrop-blur-md z-20 sm:hidden`}
      ></div>
      <div className="w-screen absolute p-3 top-0 right-0 z-50 flex flex-col items-end gap-3 sm:w-fit sm:grid sm:grid-cols-[1fr_min-content] sm:gap-2">
        <div className="sm:self-center sm:-col-start-1 sm:row-start-1">
          <Button
            onclick={() => setIsColorOpen((prev) => !prev)}
            variant="icon"
          >
            <CircleX />
          </Button>
        </div>
        <div className="self-center grid grid-cols-4 p-5 gap-5 sm:flex sm:items-center sm:flex-wrap sm:gap-2 sm:py-0">
          <Colors />
        </div>
      </div>
    </>
  );
}

export default ColorPicker;
