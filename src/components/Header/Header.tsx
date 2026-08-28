import { Icon } from "../Icon/Icon";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.icon}></div>
        <span className={styles.title}>Моя библиотека</span>
      </div>
      <label className={styles.search}>
        <Icon name="search" />
        <input
          className={styles.input}
          type="text"
          placeholder="Поиск книг"
        />
      </label>
    </header>
  );
};

export default Header;
