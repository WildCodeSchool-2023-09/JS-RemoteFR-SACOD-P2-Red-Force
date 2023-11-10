import { NavLink as Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import navdata from "../data/navdata.json";
import Burger from "./Burger";
import "../scss/navbar.scss";
import trivalitylogo from "../assets/Trivality_Logo_Officiel.svg";

export default function Navbar({ setUrl }) {
  Navbar.propTypes = {
    setUrl: PropTypes.func.isRequired,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const [openCat, setOpenCat] = useState(false);
  const handleOpenCat = () => {
    setOpenCat(!openCat);
  };

  function handleBtnClick() {
    setUrl(`https://opentdb.com/api.php?amount=1&category=0`);
  }

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
                        onClick={() => handleBtnClick()}
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
