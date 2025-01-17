import css from "./Features.module.css";
import Tag from "../Tag/Tag";

function Features({ camper }) {
  return (
    <div className={css.features}>
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
        {camper.refrigerator && <Tag svg="fridge" name="Refrigerator" />}
        {camper.microwave && <Tag svg="microwave" name="Microwave" />}
        {camper.gas && <Tag svg="gas" name="Gas" />}
        {camper.water && <Tag svg="water" name="Water" />}
      </ul>
      <h3 className={css.title}>Vehicle Details</h3>
      <ul className={css.characteristics}>
        <li>
          <span>Form:</span> {camper.form}
        </li>
        <li>
          <span>Length:</span> {camper.length}
        </li>
        <li>
          <span>Width:</span> {camper.width}
        </li>
        <li>
          <span>Height:</span> {camper.height}
        </li>
        <li>
          <span>Tank:</span> {camper.tank}
        </li>
        <li>
          <span>Consumption:</span>
          {camper.consumption}
        </li>
      </ul>
    </div>
  );
}

export default Features;
