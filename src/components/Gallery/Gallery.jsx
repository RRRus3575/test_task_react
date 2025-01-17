import InfoBlock from "../Infoblock/Infoblock";
import css from "./Gallery.module.css";

function Gallery({ camper }) {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.title}>{camper.name}</h2>
        <InfoBlock camper={camper} />
        <p className={css.price}>&#8364;{camper.price.toFixed(2)}</p>
      </div>
      <ul className={css.list}>
        {camper.gallery.map((img, index) => (
          <li className={css.item} key={index}>
            <img src={img.thumb} alt="automobile" />
          </li>
        ))}
      </ul>

      <p className={css.description}>{camper.description}</p>
    </section>
  );
}

export default Gallery;
