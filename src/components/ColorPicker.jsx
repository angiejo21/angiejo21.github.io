import { CircleX } from "lucide-react";
import Button from "./Button";
import { useTheme } from "../context/themeContext";

function ColorPicker({ setClose }) {
  const { colors, setThemeColor } = useTheme();

  return (
    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] backdrop-blur-md w-10/12 h-2/3 py-4 px-5 border rounded-2xl border-mutedForeground space-y-4 flex flex-col sm:h-auto sm:w-max z-40">
      <div className="flex justify-between items-center cursor-default">
        <p className="ms-3">Pick a color</p>
        <Button onclick={() => setClose((prev) => !prev)} variant="icon">
          <CircleX />
        </Button>
      </div>
      <div className="w-full h-full grid grid-cols-3 gap-1  justify-items-center sm:h-auto sm:flex sm:flex-wrap sm:justify-center sm:items-center sm:gap-3">
        {colors.map((col) => (
          <div
            className={`${col.background} w-16 aspect-square rounded-full hover:cursor-pointer hover:ring-4 ${col.ring} sm:w-10`}
            key={col.name}
            onClick={() => setThemeColor(col.name)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;
