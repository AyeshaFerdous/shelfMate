import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Logo2 from "../../assets/logo2.png";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { pathname } = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = (
    <>
      <li className="relative group">
        <NavLink
          to="/"
          className={({ isActive }) => {
            if (pathname === "/login") {
              return isActive
                ? "text-[#5bb4e6] font-bold"
                : "text-white font-bold";
            }
            if (pathname === "/") {
              return isActive
                ? "active-link"
                : "text-black font-bold hover:text-[#5bb4e6]";
            } else {
              return isActive
                ? "active-link2"
                : "text-slate-800 font-bold hover:text-[#5bb4e6]";
            }
          }}
        >
          Home
        </NavLink>
        {/* Dropdown menu */}
        <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md w-40 z-10">
          <li>
            <NavLink
              to="/home/features"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-[#5bb4e6] px-4 py-2 block"
                  : "text-slate-800 font-medium hover:bg-[#f0f8ff] px-4 py-2 block"
              }
            >
              Features
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/home/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-[#5bb4e6] px-4 py-2 block"
                  : "text-slate-800 font-medium hover:bg-[#f0f8ff] px-4 py-2 block"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </li>

      <li>
        <NavLink
          to="/queries"
          className={({ isActive }) => {
            if (pathname === "/login") {
              return isActive
                ? "text-[#5bb4e6] font-bold"
                : "text-white font-bold";
            }
            if (pathname === "/") {
              return isActive
                ? "active-link"
                : "text-black font-bold hover:text-[#5bb4e6]";
            } else {
              return isActive
                ? "active-link2"
                : "text-slate-800 font-bold hover:text-[#5bb4e6]";
            }
          }}
        >
          Queries
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/add-queries"
              className={({ isActive }) => {
                if (pathname === "/login") {
                  return isActive
                    ? "text-[#5bb4e6] font-bold"
                    : "text-white font-bold";
                }
                if (pathname === "/") {
                  return isActive
                    ? "active-link"
                    : "text-black font-bold hover:text-[#5bb4e6]";
                } else {
                  return isActive
                    ? "active-link2"
                    : "text-slate-800 font-bold hover:text-[#5bb4e6]";
                }
              }}
            >
              Add Queries
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/recommendations-for-me"
              className={({ isActive }) => {
                if (pathname === "/login") {
                  return isActive
                    ? "text-[#5bb4e6] font-bold"
                    : "text-white font-bold";
                }
                if (pathname === "/") {
                  return isActive
                    ? "active-link"
                    : "text-black font-bold hover:text-[#5bb4e6]";
                } else {
                  return isActive
                    ? "active-link2"
                    : "text-slate-800 font-bold hover:text-[#5bb4e6]";
                }
              }}
            >
              Recommendations For Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-queries"
              className={({ isActive }) => {
                if (pathname === "/login") {
                  return isActive
                    ? "text-[#5bb4e6] font-bold"
                    : "text-white font-bold";
                }
                if (pathname === "/") {
                  return isActive
                    ? "active-link"
                    : "text-black font-bold hover:text-[#5bb4e6]";
                } else {
                  return isActive
                    ? "active-link2"
                    : "text-slate-800 font-bold hover:text-[#5bb4e6]";
                }
              }}
            >
              My Queries
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-recommendations"
              className={({ isActive }) => {
                if (pathname === "/login") {
                  return isActive
                    ? "text-[#5bb4e6] font-bold"
                    : "text-white font-bold";
                }
                if (pathname === "/") {
                  return isActive
                    ? "active-link"
                    : "text-black font-bold hover:text-[#5bb4e6]";
                } else {
                  return isActive
                    ? "active-link2"
                    : "text-slate-800 font-bold hover:text-[#5bb4e6]";
                }
              }}
            >
              My Recommendations
            </NavLink>
          </li>
        </>
      )}

      {!user && (
        <>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => {
                if (pathname === "/login") {
                  return isActive
                    ? "text-[#5bb4e6] font-bold"
                    : "text-white font-bold";
                }
                if (pathname === "/") {
                  return isActive
                    ? "active-link"
                    : "text-black font-bold hover:text-[#5bb4e6]";
                } else {
                  return isActive
                    ? "active-link2"
                    : "text-slate-800 font-bold hover:text-[#5bb4e6]";
                }
              }}
            >
              Login/Register
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div
      className={
        isScrolled
          ? "fixed z-[1000] w-full top-0 backdrop-blur-md bg-opacity-70"
          : "fixed z-[1000] w-full top-0"
      }
    >
      <div className="navbar gap-5 px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu-sm dropdown-content bg-transparent backdrop-blur-md rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          {pathname === "/login" ? (
            <img className="w-52" src={Logo2} alt="" />
          ) : (
            <img className="w-52" src={Logo} alt="" />
          )}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 gap-4">{links}</ul>
        </div>
        <div className="navbar-end">
          {user && user?.email ? (
            <div className="group relative inline-block">
              <img
                className="w-12 h-12 rounded-full object-cover cursor-pointer"
                src={user.photoURL}
                referrerPolicy="no-referrer"
                alt="Profile"
              />
              <div className="absolute z-[1000] right-0 mt-2 hidden w-48 bg-white shadow-lg rounded-lg group-hover:block">
                <div className="p-4">
                  <p className="text-sm text-black font-medium">
                    {user.displayName}
                  </p>
                </div>
                <hr />
                <div className="p-2">
                  <button
                    className="w-full px-4 py-2 text-sm text-white bg-[#5bb4e6] rounded hover:bg-[#5bb4e6]"
                    onClick={logOut}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
