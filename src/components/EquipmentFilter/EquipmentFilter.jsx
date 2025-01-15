import React from "react";
import sprite from "../../assets/sprite.svg";
import css from "./EquipmentFilter.module.css";

function EquipmentFilter({ selectedOptions, onChange }) {
  return (
    <div className={css.container}>
      <h3>Vehicle equipment</h3>
      <div className={css.equipmentFilter}>
        {/* Отдельные элементы */}
        <label className={css.label}>
          <input
            type="checkbox"
            value="AC"
            onChange={onChange}
            checked={selectedOptions.includes("AC")}
            className="visually-hidden"
          />
          <svg
            style={{
              width: "32px",
              height: "32px",
            }}
          >
            <use href={`${sprite}#ac`} />
          </svg>
          AC
        </label>

        <label className={css.label}>
          <input
            type="checkbox"
            value="kitchen"
            onChange={onChange}
            checked={selectedOptions.includes("kitchen")}
            className="visually-hidden"
          />
          <svg
            style={{
              width: "32px",
              height: "32px",
            }}
          >
            <use href={`${sprite}#kitchen`} />
          </svg>
          Kitchen
        </label>

        <label className={css.label}>
          <input
            type="checkbox"
            value="TV"
            onChange={onChange}
            checked={selectedOptions.includes("TV")}
            className="visually-hidden"
          />
          <svg
            style={{
              width: "32px",
              height: "32px",
            }}
          >
            <use href={`${sprite}#tv`} />
          </svg>
          TV
        </label>

        <label className={css.label}>
          <input
            type="checkbox"
            value="bathroom"
            onChange={onChange}
            checked={selectedOptions.includes("bathroom")}
            className="visually-hidden"
          />
          <svg
            style={{
              width: "32px",
              height: "32px",
            }}
          >
            <use href={`${sprite}#shower`} />
          </svg>
          Bathroom
        </label>

        {/* Transmission filter */}
        <label className={css.label}>
          <input
            type="checkbox"
            value="transmission:automatic"
            onChange={onChange}
            checked={selectedOptions.includes("transmission:automatic")}
            className="visually-hidden"
          />
          <svg
            style={{
              width: "32px",
              height: "32px",
            }}
          >
            <use href={`${sprite}#automatic`} />
          </svg>
          Automatic
        </label>
      </div>
    </div>
  );
}

export default EquipmentFilter;
