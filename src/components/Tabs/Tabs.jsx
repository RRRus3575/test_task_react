import React, { useState } from "react";
import css from "./Tabs.module.css";
import Tag from "../Tag/Tag";

function Tabs({ camper, activeTab }) {
  return (
    <div className={css.container}>
      {/* Переключатели */}

      {/* Контент вкладок */}
      <div className={css.tabContent}>
        {activeTab === "details" && (
          <div>
            <ul className={css.listtag}>
              {camper.transmission === "automatic" && (
                <Tag svg="automatic" name="Automatic" />
              )}
              {camper.engine === "petrol" && <Tag svg="petrol" name="Petrol" />}
              {camper.engine === "diesel" && <Tag svg="petrol" name="Diesel" />}
              {camper.kitchen && <Tag svg="kitchen" name="Kitchen" />}
              {camper.AC && <Tag svg="ac" name="AC" />}
              {camper.radio && <Tag svg="radio" name="Radio" />}
              {camper.bathroom && <Tag svg="bathroom" name="Bathroom" />}
              {camper.refrigerator && (
                <Tag svg="refrigerator" name="Refrigerator" />
              )}
              {camper.microwave && <Tag svg="microwave" name="Microwave" />}
              {camper.gas && <Tag svg="gas" name="Gas" />}
              {camper.water && <Tag svg="water" name="Water" />}
            </ul>
            <h3>Vehicle Details</h3>
            <ul>
              <li>
                <strong>Form:</strong> Panel truck
              </li>
              <li>
                <strong>Length:</strong> 5.4 m
              </li>
              <li>
                <strong>Width:</strong> 2.01 m
              </li>
              <li>
                <strong>Height:</strong> 2.05 m
              </li>
              <li>
                <strong>Tank:</strong> 132 l
              </li>
              <li>
                <strong>Consumption:</strong> 12.4 l/100km
              </li>
            </ul>
          </div>
        )}
        {activeTab === "reviews" && (
          <div>
            <h3>Reviews</h3>
            <ul>
              <li>
                <p>"Great campervan, very spacious!" - John D.</p>
              </li>
              <li>
                <p>"Perfect for a weekend trip, highly recommend!" - Jane S.</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tabs;
