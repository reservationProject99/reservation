import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import { useRef } from "react";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },
  {
    path: "/provider",
    display: "provider",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* =============== header top =========== */}
      <div className="header__middle">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-3 col-sm-4">
              <div className="logo">
                <h1>
                  <Link to="/home" className="d-flex align-items-center gap-2">
                    <i className="ri-car-line"></i>
                    <span>QuickRide</span>
                  </Link>
                </h1>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 col-sm-0 d-flex align-items-center justify-content-end gap-2">
              <button className="header__btn btn">
                {" "}
                <Link path="/">
                  {" "}
                  <i className="ri-user-line"></i>
                </Link>
              </button>{" "}
              <button className="header__btn btn">
                <Link to="/signUp">Sign Up</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <div className="container">
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    activeClassName="nav__active"
                    className="nav__item"
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
