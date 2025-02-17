import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [themeColor, setThemeColor] = useState("amber");
  const [isColorOpen, setIsColorOpen] = useState(false);

  const colors = [
    { name: "red", background: "bg-red-500", ring: "ring-red-800" },
    {
      name: "orange",
      background: "bg-orange-500",
      ring: "ring-orange-800",
    },
    { name: "amber", background: "bg-amber-500", ring: "ring-amber-800" },
    {
      name: "yellow",
      background: "bg-yellow-500",
      ring: "ring-yellow-800",
    },
    { name: "lime", background: "bg-lime-500", ring: "ring-lime-800" },
    {
      name: "emerald",
      background: "bg-emerald-500",
      ring: "ring-emerald-800",
    },
    { name: "cyan", background: "bg-cyan-500", ring: "ring-cyan-800" },
    { name: "blue", background: "bg-blue-500", ring: "ring-blue-800" },
    {
      name: "purple",
      background: "bg-purple-500",
      ring: "ring-purple-800",
    },
    {
      name: "fuchsia",
      background: "bg-fuchsia-500",
      ring: "ring-fuchsia-800",
    },
    { name: "pink", background: "bg-pink-500", ring: "ring-pink-800" },
    {
      name: "white",
      background: "bg-neutral-500",
      ring: "ring-neutral-800",
    },
  ];

  return (
    <ThemeContext.Provider
      value={{ colors, themeColor, setThemeColor, isColorOpen, setIsColorOpen }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("ThemeContext is being used outside its provider");
  }
  return context;
}

export { ThemeProvider, useTheme };
