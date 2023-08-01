import { useEffect, useRef } from "react";
import logo from "../../assets/images/logo.png";
import userImg from "../../assets/images/avatar-icon.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
const Header = () => {
  const navLinks = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/doctors",
      display: "Find Doctor",
    },
    {
      path: "/services",
      display: "Services",
    },
    {
      path: "/contact",
      display: "Contact",
    },
  ];
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky-header");
      } else {
        headerRef.current.classList.remove("sticky-header");
      }
    });
  };
  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });
  const toggleMenu = () => menuRef.current.classList.toggle("show-menu");
  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between ">
          {/* Logo */}
          <div>
            <Link to="/">
            <img src={logo} alt="" />
            </Link>
          </div>
          {/* ============== menu ==================== */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem] ">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? " text-[16px] font-[600]  leading-7 text-primaryColor "
                        : " text-[16px] font-[500]  leading-7 text-textColor hover:text-primaryColor "
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* =============== right Nav ============== */}
          <div className="flex items-center gap-4 ">
            <div className=" hidden ">
              <Link to="/">
                <figure className="h-[35px] w-[35px] cursor-pointer rounded-full">
                  <img
                    src={userImg}
                    alt=""
                    className="w-full cursor-pointer rounded-full"
                  />
                </figure>
              </Link>
            </div>
            <Link to="/login">
              <button className=" flex h-[44px] items-center justify-center rounded-[50px] bg-primaryColor px-6 py-2 font-[600] text-white">
                Login
              </button>
            </Link>
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="h-8 w-8 cursor-pointer text-primaryColor" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
