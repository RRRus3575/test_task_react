import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";

function HomePage() {
  return (
    <>
      <Header />
      <section className="hero">
        <h1>Campers of your dreams</h1>
        <p>You can find everything you want in our catalog</p>
        <Link to="/catalog">
          <Button>View Now</Button>
        </Link>
      </section>
    </>
  );
}

export default HomePage;
