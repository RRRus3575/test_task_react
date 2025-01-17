import sprite from "../../assets/sprite.svg";
import css from "./Reviews.module.css";

function Reviews({ camper }) {
  return (
    <div className={css.reviews}>
      <ul className={css.list}>
        {camper.reviews.map((item, index) => (
          <li key={index}>
            <div className={css.profile}>
              <div className={css.icon}>
                <p>{item.reviewer_name.charAt(0)}</p>
              </div>
              <div>
                <p>{item.reviewer_name}</p>
                <ul className={css.stars}>
                  {Array.from({ length: 5 }, (_, index) => (
                    <li key={index}>
                      <svg
                        style={{
                          width: "16px",
                          height: "16px",
                          color:
                            index < Math.round(item.reviewer_rating)
                              ? "#FFC531"
                              : "#E0E0E0",
                        }}
                      >
                        <use href={`${sprite}#star`} />
                      </svg>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className={css.comment}>{item.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;
