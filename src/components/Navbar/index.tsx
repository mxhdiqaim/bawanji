import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { CgMenuGridO } from "react-icons/cg";
import logo from "../../assets/logo.png";
import { Box } from "@mui/material";

interface NavLinksT {
  title: string,
  slug: string,
}


const navLinks: NavLinksT[] = [
  {
    title: "",
    slug: "home",
  },
  {
    title: "About",
    slug: "about",
  },
  {
    title: "Offers",
    slug: "offers"
  },
  {
    title: "Seats",
    slug: "seats",
  },
  {
    title: "Destination",
    slug: "destination"
  },
];

// "Home", "About", "Offers", "Seats", "Destination"

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
            {navLinks.map((navLink: NavLinksT, index: number) => (
              <li onClick={removeNavBar} key={index}>
                <Link to={`/${navLink.slug}`} className="listItem">
                  {navLink.title}
                </Link>
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
