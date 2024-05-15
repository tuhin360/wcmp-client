import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import '../../../styles/Home/Navbar.css'
interface MenuItem {
  label: string;
  route: string;
  submenu?: string[];
}

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const location = useLocation();

  const menuOptions: MenuItem[] = [
    { label: "Home", route: "/" },
    { label: "All Winter Clothes", route: "/all-winter-cloth" },
    { label: "Dashboard", route: "/dashboard" },
    { label: "About Us", route: "/about-us" },
    { label: "Blog", route: "/blog" },
  ];

  const generateMenuItems = (options: MenuItem[]) => {
    return options.map((option, index) => (
      <li key={index}>
        {option.submenu ? (
          <details>
            <summary>{option.label}</summary>
            <ul className="p-2 ">
              {option.submenu.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <a>{subItem}</a>
                </li>
              ))}
            </ul>
          </details>
        ) : (
          <Link
            to={option.route}
            className={option.route === activeItem ? "active" : ""}
            onClick={() => setActiveItem(option.route)}
          >
            {option.label}
          </Link>
        )}
      </li>
    ));
  };

  return (
    <div className="navbar fixed z-10 bg-opacity-70 md:bg-opacity-30 bg-black text-white max-w-screen-xl mb-20">
      <div className="navbar-start">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 bg-opacity-90 bg-black">
            {generateMenuItems(menuOptions)}
          </ul>
        </div>
        <Link
          to="/"
          className="logo-text text-xl ml-2 hover:bg-opacity-30 hover:bg-black p-2 rounded-md transition"
        >
          WCMP
        </Link>
      </div>
      <div className="navbar-center  hidden lg:flex">
        <ul className=" menu menu-horizontal px-1 ">
          {generateMenuItems(menuOptions)}
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to="/login"
          className="ml-10 text-xl mr-3 hover:bg-opacity-30 hover:bg-black p-2 rounded-md transition"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
