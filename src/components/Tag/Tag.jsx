import sprite from "../../assets/sprite.svg";
import css from "./Tag.module.css";

function Tag({ svg, name }) {
  return (
    <li className={css.item}>
      <svg
        style={{
          width: "20px",
          height: "20px",
        }}
      >
        <use href={`${sprite}#${svg}`} />
      </svg>
      {name}
    </li>
  );
}

export default Tag;
