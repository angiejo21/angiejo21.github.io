import { Link, useLocation } from "react-router";

function NavLink({ to, children }) {
  const { pathname } = useLocation();
  const isSelected = pathname === to;

  return (
    <Link
      to={to}
      className={`relative uppercase after:content-[''] after:w-full after:h-0.5 after:bg-accent after:z-30 after:absolute after:-bottom-1 after:left-0 after:opacity-0 hover:after:opacity-100 ${
        isSelected ? "after:opacity-100" : ""
      }`}
    >
      {children}
    </Link>
  );
}

export default NavLink;
