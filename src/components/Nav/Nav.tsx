import styles from "./Nav.module.css";
import { tabs } from "@/definitions/definitions.tabs";
import { NavLink } from "react-router-dom";

export function Nav() {
  return (
    <nav className={styles.nav}>
      {tabs.map((tab) => (
        <NavLink
          key={tab.id}
          to={tab.to}
          className={({ isActive }) =>
            `${styles.tab} ${isActive ? styles.active : ""}`
          }
        >
          {tab.label}
        </NavLink>
      ))}
    </nav>
  );
}
