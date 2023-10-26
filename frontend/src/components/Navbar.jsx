import { NavLink as Link } from "react-router-dom";
import { useState } from "react";
import navdata from "../data/navdata.json";
import Burger from "./Burger";
import "../scss/navbar.scss";
import trivalitylogo from "../assets/Trivality_Logo_Officiel.svg";

export default function Navbar() {
  /* State to open burger menu */
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const [openCat, setOpenCat] = useState(false);
  const handleOpenCat = () => {
    console.warn("openCat");
    setOpenCat(!openCat);
  };

  return (
    <nav>
      <img className="trivality" src={trivalitylogo} alt="" />
      <div className="navbar">
        <ul className={`nav ${open ? "nav-open" : "hide-nav"}`}>
          {navdata.map((index) =>
            index.dropdown !== undefined ? (
              <li className="dropdown-link" key={index.id}>
                <Link
                  className="nav-link"
                  onClick={handleOpenCat}
                  to={index.linkurl}
                >
                  {index.linkname} <span>▾</span>
                </Link>
                <ul
                  className={`dropdown-content ${
                    openCat ? "cat-open" : "hide-cat"
                  }`}
                >
                  {index.dropdown.map((dropdownindex) => (
                    <li className="nav-ddlink" key={dropdownindex.id}>
                      <Link
                        className="nav-link nav-ddlink"
                        to={dropdownindex.linkurl}
                      >
                        {dropdownindex.linkname}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={index.id}>
                <Link className="nav-link" to={index.linkurl}>
                  {index.linkname}
                </Link>
              </li>
            )
          )}
        </ul>
        <Burger handleOpen={handleOpen} />
      </div>
    </nav>
  );
}
