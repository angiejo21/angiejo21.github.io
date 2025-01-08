import { useTheme } from "../context/themeContext";

function Colors() {
  const { colors, themeColor, setThemeColor } = useTheme();

  return (
    <>
      {colors.map((col) => (
        <div
          className={`${
            col.background
          } w-20 aspect-square rounded-full hover:cursor-pointer ${
            col.name === themeColor ? "ring-4" : ""
          } hover:ring-4 ${col.ring} sm:w-10`}
          key={col.name}
          onClick={() => setThemeColor(col.name)}
        ></div>
      ))}
    </>
  );
}

export default Colors;
