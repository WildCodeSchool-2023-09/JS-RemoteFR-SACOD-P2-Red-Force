import { NavLink as Link } from "react-router-dom";
import navdata from "../data/navdata.json";
import Burger from "./Burger";
import "../scss/navbar.scss";
import trivalitylogo from "../assets/Trivality_Logo_Officiel.svg";

export default function Navbar() {
  return (
    <nav>
      <img className="trivality" src={trivalitylogo} alt="" />
      <div className="navbar">
        <ul className="nav">
          {navdata.map((index) =>
            index.dropdown !== undefined ? (
              <li className="dropdown-link" key={index.id}>
                <Link className="nav-link" to={index.linkurl}>
                  {index.linkname} <span>▾</span>
                </Link>
                <ul className="dropdown-content">
                  {index.dropdown.map((dropdownindex) => (
                    <li key={dropdownindex.id}>
                      <Link className="nav-link" to={dropdownindex.linkurl}>
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
        <Burger />
      </div>
    </nav>
  );
}
