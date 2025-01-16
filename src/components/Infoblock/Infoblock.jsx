import css from "./Infoblock.module.css";
import sprite from "../../assets/sprite.svg";

function Infoblock({ camper }) {
  return (
    <div className={css.infoblock}>
      {camper.reviews.length > 0 && (
        <div className={css.reviews}>
          <svg style={{ width: "16px", height: "16px" }}>
            <use href={`${sprite}#star`} />
          </svg>
          <p>
            {camper.rating}({camper.reviews.length} Reviews)
          </p>
        </div>
      )}
      <div className={css.location}>
        <svg style={{ width: "16px", height: "16px" }}>
          <use href={`${sprite}#map`} />
        </svg>
        <p>{camper.location}</p>
      </div>
    </div>
  );
}

export default Infoblock;
