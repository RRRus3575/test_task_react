import { Link, useLocation } from "react-router-dom";
import css from "./Header.module.css";
import sprite from "../../assets/sprite.svg";

function Header() {
  const location = useLocation();

  return (
    <header className={css.header}>
      <Link to="/" className={css.logo}>
        <svg style={{ width: "136px", height: "16px" }}>
          <use href={`${sprite}#logo`} />
        </svg>
      </Link>
      <nav>
        <ul className={css.nav}>
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? css.active : css.link}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/catalog"
              className={
                location.pathname === "/catalog" ? css.active : css.link
              }
            >
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
