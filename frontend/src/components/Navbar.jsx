import { NavLink as Link } from "react-router-dom";
import navdata from "../data/navdata.json";
import Logo from "./Logo";
import Burger from "./Burger";
import "../scss/navbar.scss";

export default function Navbar() {
  return (
    <nav>
      <Logo />
      <div className="navbar">
        <ul className="nav">
          {navdata.map((index) =>
            index.dropdown !== undefined ? (
              <li key={index.id}>
                <Link className="nav-link" to={index.linkurl}>
                  {index.linkname}
                </Link>
                <ul className="dropdown">
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
