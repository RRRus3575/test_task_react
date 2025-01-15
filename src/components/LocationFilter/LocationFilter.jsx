import React from "react";
import css from "./LocationFilter.module.css";
import sprite from "../../assets/sprite.svg";

function LocationFilter({ value, onChange }) {
  return (
    <div className={css.container}>
      <label htmlFor="location" className={css.label}>
        Location
      </label>
      <div className={css.searchinput}>
        <svg
          style={{ width: "20px", height: "20px" }}
          className={`${css.map} ${
            value.trim() === "" ? css.placeholderColor : css.activeColor
          }`}
        >
          <use href={`${sprite}#map`} />
        </svg>
        <input
          className={css.search}
          type="text"
          id="location"
          name="location"
          placeholder="Kyiv, Ukraine"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default LocationFilter;
