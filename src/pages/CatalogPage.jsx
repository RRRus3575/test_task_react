import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../store/campersSlice";
import { Link } from "react-router-dom";
import Filters from "../components/Filters";

function CatalogPage() {
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
          ? filters.options.every((option) => camper[option] === true)
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
    <div>
      <h1>Catalog</h1>
      <Link to="/">
        <button style={{ padding: "10px 20px", fontSize: "16px" }}>Home</button>
      </Link>
      <Filters onFilterChange={onFilterChange} />
      <ul>
        {paginatedCampers.map((camper) => (
          <li key={camper.id}>
            <h2>{camper.name}</h2>
            <p>{camper.description}</p>
            <Link to={`/catalog/${camper.id}`}>
              <button>Show more</button>
            </Link>
          </li>
        ))}
      </ul>
      {paginatedCampers.length < filteredCampers.length && (
        <button
          onClick={handleLoadMore}
          style={{
            padding: "10px 20px",
            margin: "20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Load More
        </button>
      )}
      {paginatedCampers.length === 0 && <p>No campers found.</p>}
    </div>
  );
}

export default CatalogPage;
