function Pill({ color, onclick, children }) {
  let style = `flex px-3 w-max border-2 rounded-full border-${color} bg-transparent cursor-pointer ${
    onclick ? `hover:bg-${color}` : ""
  }`;

  return (
    <li onClick={onclick} className={style}>
      {children}
    </li>
  );
}

export default Pill;
