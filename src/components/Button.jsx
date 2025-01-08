import { useTheme } from "../context/themeContext";

function Button({ variant, type, onclick, children }) {
  const { color } = useTheme();
  let style;
  const btnPrimary =
    "z-10 uppercase rounded-full bg-primary py-3 px-5 text-primaryForeground border-2 border-primary hover:opacity-90 hover:scale-105 flex gap-2 items-center";
  const btnSecondary =
    "z-10 uppercase rounded-full py-3 px-5 border-2 border-secondary backdrop-blur-md text-secondary hover:backdrop-blur-3xl hover:scale-105 flex gap-2 items-center";
  const btnTertiary =
    "z-10 uppercase rounded-full py-3 px-5 hover:bg-accentHover hover:text-accentForeground hover:scale-105";
  const btnIcon =
    "z-10 rounded-full p-2 hover:bg-accentHover hover:scale-105 active:bg-accentHover active:scale-105";
  const btnNav =
    "z-10 uppercase rounded-full bg-primary py-1 px-3 text-primaryForeground border-2 border-primary hover:opacity-90 hover:scale-105 flex gap-1 flex items-center";

  switch (variant) {
    case "primary":
      style = btnPrimary;
      break;
    case "secondary":
      style = btnSecondary;
      break;
    case "tertiary":
      style = btnTertiary;
      break;
    case "icon":
      style = btnIcon;
      break;
    case "nav":
      style = btnNav;
      break;
    default:
      null;
  }

  switch (type) {
    case "resume":
      return (
        <a
          href="/public/resume_angela-bello.pdf"
          download={"angela-bello_resume-2024"}
          className={style}
        >
          {children}
        </a>
      );
    case "submit":
      return (
        <button type="submit" className={style}>
          {children}
        </button>
      );
    default:
      return (
        <button onClick={onclick} className={style}>
          {children}
        </button>
      );
  }
}

export default Button;
