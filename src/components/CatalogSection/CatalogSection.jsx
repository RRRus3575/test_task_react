import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../store/campersSlice";
import CatalogList from "../CatalogList/CatalogList";
import Filters from "../Filters/Filters";
import css from "./CatalogSection.module.css";

function CatalogSection() {
  const dispatch = useDispatch();
  // Получаем всех кемперов из Redux
  const campers = useSelector((state) => state.campers.campers);

  const [filters, setFilters] = useState({
    location: "",
    type: "",
    options: [],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Загружаем кемперов при первой загрузке
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  // Отфильтрованные кемперы с мемоизацией
  const filteredCampers = useMemo(() => {
    return campers.filter((camper) => {
      const matchesLocation =
        !filters.location ||
        camper.location.toLowerCase().includes(filters.location.toLowerCase());

      const matchesType =
        !filters.type ||
        camper.form.toLowerCase() === filters.type.toLowerCase();

      const matchesOptions =
        Array.isArray(filters.options) && filters.options.length > 0
          ? filters.options.every((option) => {
              if (option === "transmission:automatic") {
                // Проверяем, что трансмиссия у кемпера автоматическая
                return camper.transmission === "automatic";
              }
              return camper[option] === true; // Проверяем другие опции
            })
          : true;

      return matchesLocation && matchesType && matchesOptions;
    });
  }, [campers, filters]);

  // Рассчитываем элементы для отображения на текущей странице
  const paginatedCampers = useMemo(() => {
    return filteredCampers.slice(0, currentPage * itemsPerPage);
  }, [filteredCampers, currentPage]);

  // Функция для обработки фильтров
  const onFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  // Функция для загрузки следующей страницы
  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  return (
    <section className={css.section}>
      <h1 className="visually-hidden ">Catalog</h1>
      <div className={css.catalog}>
        <Filters onFilterChange={onFilterChange} />
        <CatalogList
          filteredCampers={filteredCampers}
          handleLoadMore={handleLoadMore}
          paginatedCampers={paginatedCampers}
        />
      </div>
    </section>
  );
}

export default CatalogSection;
