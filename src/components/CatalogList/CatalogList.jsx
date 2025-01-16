import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import css from "./CatalogList.module.css";
import sprite from "../../assets/sprite.svg";
import Tag from "../Tag/Tag";
import Infoblock from "../Infoblock/Infoblock";

function CatalogList({ paginatedCampers, handleLoadMore, filteredCampers }) {
  // Состояние для избранных с начальной загрузкой из localStorage
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return savedFavorites;
  });

  // Обновляем localStorage при изменении favorites
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Обработчик для добавления/удаления из избранного
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {paginatedCampers.map((camper) => (
          <li key={camper.id} className={css.item}>
            <div className={css.imagecontainer}>
              <img
                src={camper.gallery[0]?.thumb || "/placeholder.jpg"}
                alt="automobile"
              />
            </div>
            <div className={css.wrap}>
              <div>
                <div className={css.titlecontainer}>
                  <h2>{camper.name}</h2>
                  <div className={css.price}>
                    <p>&#8364;{camper.price.toFixed(2)}</p>
                    <button
                      className={`${css.heart} ${
                        favorites.includes(camper.id) ? css.saved : css.nosaved
                      }`}
                      onClick={() => toggleFavorite(camper.id)}
                    >
                      <svg style={{ width: "26px", height: "24px" }}>
                        <use href={`${sprite}#heart`} />
                      </svg>
                    </button>
                  </div>
                </div>

                <Infoblock camper={camper} />
              </div>

              <p>{camper.description.slice(0, 62)}...</p>

              <ul className={css.listtags}>
                {camper.transmission === "automatic" && (
                  <Tag svg="automatic" name="Automatic" />
                )}
                {camper.engine === "petrol" && (
                  <Tag svg="petrol" name="Petrol" />
                )}
                {camper.engine === "diesel" && (
                  <Tag svg="petrol" name="Diesel" />
                )}
                {camper.kitchen && <Tag svg="kitchen" name="Kitchen" />}
                {camper.AC && <Tag svg="ac" name="AC" />}
              </ul>

              <Link to={`/catalog/${camper.id}`}>
                <Button type="button">Show more</Button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
      {paginatedCampers.length < filteredCampers.length && (
        <button onClick={handleLoadMore} className={css.loadmore}>
          Load More
        </button>
      )}
      {paginatedCampers.length === 0 && <p>No campers found.</p>}
    </div>
  );
}

export default CatalogList;
