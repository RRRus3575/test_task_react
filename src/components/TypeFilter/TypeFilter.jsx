import React from "react";
import sprite from "../../assets/sprite.svg";
import css from "./TypeFilter.module.css";

function TypeFilter({ options, selectedType, onTypeChange }) {
  return (
    <div className={css.container}>
      <h3>Vehicle type</h3>
      <div className={css.radiolist}>
        <label className={css.label}>
          <input
            type="radio"
            name="vehicleType"
            value="alcove"
            checked={selectedType === "alcove"}
            onChange={(e) => onTypeChange(e.target.value)}
            className="visually-hidden"
          />
          <svg
            style={{
              width: "32px",
              height: "32px",
            }}
          >
            <use href={`${sprite}#alcove`} />
          </svg>
          Alcove
        </label>

        <label className={css.label}>
          <input
            type="radio"
            name="vehicleType"
            value="fully integrated"
            checked={selectedType === "fully integrated"}
            onChange={(e) => onTypeChange(e.target.value)}
            className="visually-hidden"
          />
          <svg
            style={{
              width: "32px",
              height: "32px",
            }}
          >
            <use href={`${sprite}#integrated`} />
          </svg>
          Fully Integrated
        </label>

        <label className={css.label}>
          <input
            type="radio"
            name="vehicleType"
            value="van"
            checked={selectedType === "van"}
            onChange={(e) => onTypeChange(e.target.value)}
            className="visually-hidden"
          />
          <svg
            style={{
              width: "32px",
              height: "32px",
            }}
          >
            <use href={`${sprite}#van`} />
          </svg>
          Van
        </label>
      </div>
    </div>
  );
}

export default TypeFilter;
