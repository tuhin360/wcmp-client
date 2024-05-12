import { Link } from "react-router-dom";


interface MenuItem {
  label: string;
  route: string;
  submenu?: string[];
}

const Navbar: React.FC = () => {
  const menuOptions: MenuItem[] = [
    { label: "Home", route: '/' },
    { label: "Winter Clothes", route: "/winter-clothes" },
    { label: "Dashboard", route: "/dashboard" },
    { label: "About Us", route: "/about-us"},
    { label: "Blog", route: "/blog"},
  ];

  const generateMenuItems = (options: MenuItem[]) => {
    return options.map((option, index) => (
      <li key={index}>
        {option.submenu ? (
          <details>
            <summary>{option.label}</summary>
            <ul className="p-2">
              {option.submenu.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <a>{subItem}</a>
                </li>
              ))}
            </ul>
          </details>
        ) : (
          <Link to={option.route} className="">{option.label}</Link>
        )}
      </li>
    ));
  };

  return (
    <div className="navbar   fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {generateMenuItems(menuOptions)}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          WCMP
        </Link>
      </div>
      <div className="navbar-center  hidden lg:flex">
        <ul className=" menu menu-horizontal px-1">
          {generateMenuItems(menuOptions)}
        </ul>
      </div>
      <Link to="/login" className="navbar-end btn btn-ghost text-xl">
         Login
      </Link>
    </div>
  );
};

export default Navbar;
