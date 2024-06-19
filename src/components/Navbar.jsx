import React from "react";
import styles from "./css/Navbar.module.css";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/main"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              Main
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              Profile
            </NavLink>
            
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
