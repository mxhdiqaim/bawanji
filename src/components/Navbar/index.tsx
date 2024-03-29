import { useEffect, useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import logo from "../../assets/logo.png";
import { Box } from "@mui/material";


const navLinks: string[] = ["Home", "About", "Offers", "Seats", "Destination"];

const Navbar = () => {
  // remove navBar on small screens
  const [activeClassName, setActiveClassName] = useState("navBarMenu");
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const removeNavBar = () => {
    setActiveClassName("navBarMenu");
  };

  // add bgcolor on second nabVar
  const [navBg, setNavBg] = useState("navBarTwo");

  const addBgColor = () => {
    if (window.scrollY >= 10) {
      setNavBg("navBarTwo navbar_With_Bg");
    } else {
      setNavBg("navBarTwo");
    }
  };
  window.addEventListener("scroll", addBgColor);

  useEffect(() => {
    if (toggleMenu) {
      setActiveClassName("navBarMenu showNavBar");
    } else {
      setActiveClassName("navBarMenu");
    }
  }, [toggleMenu]);

  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div className="atb flex">
          <Box component="span" sx={{ color: "#c78437", fontSize: "1rem" }}>
            Experimental
          </Box>
        </div>
      </div>

      <div className={navBg}>
        <div className="logoDiv">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className={activeClassName}>
          <ul className="menu flex">
            {navLinks.map((navLink: string, index: number) => (
              <li onClick={removeNavBar} className="listItem" key={index}>
                {navLink}
              </li>
            ))}
          </ul>
        </div>
        <div onClick={() => setToggleMenu(!toggleMenu)} className="toggleIcon">
          <CgMenuGridO className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
