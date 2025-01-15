import Button from "../Button/Button";
import { Link } from "react-router-dom";
import css from "./Hero.module.css";

function Hero() {
  return (
    <section className={css.hero}>
      <h1 className={css.title}>Campers of your dreams</h1>
      <p className={css.paragraph}>
        You can find everything you want in our catalog
      </p>
      <Link to="/catalog">
        <Button>View Now</Button>
      </Link>
    </section>
  );
}

export default Hero;
