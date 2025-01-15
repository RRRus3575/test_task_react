import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/catalog">
          <button>Catalog</button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
