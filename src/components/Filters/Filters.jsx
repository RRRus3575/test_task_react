import React, { useState } from "react";
import Button from "../Button/Button";
import css from "./Filters.module.css";
import LocationFilter from "../LocationFilter/LocationFilter";
import TypeFilter from "../TypeFilter/TypeFilter";
import EquipmentFilter from "../EquipmentFilter/EquipmentFilter";

function Filters({ onFilterChange }) {
  const [filters, setFilters] = useState({
    location: "",
    equipment: [],
    type: "",
  });

  // Обновление текстового поля для фильтрации по локации
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Обновление состояния для чекбоксов (фильтрация по оборудованию)
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      equipment: checked
        ? [...prev.equipment, value]
        : prev.equipment.filter((item) => item !== value),
    }));
  };

  // Обновление типа кузова
  const handleTypeChange = (type) => {
    setFilters((prev) => ({
      ...prev,
      type: prev.type === type ? "" : type,
    }));
  };

  // Обработка отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange(filters);
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      {/* Фильтр по локации */}
      <LocationFilter value={filters.location} onChange={handleInputChange} />
      <h2 className={css.title}>Filters</h2>
      {/* Фильтры по оборудованию */}
      <EquipmentFilter
        selectedOptions={filters.equipment}
        onChange={handleCheckboxChange}
      />

      {/* Тип кузова */}
      <TypeFilter selectedType={filters.type} onTypeChange={handleTypeChange} />

      {/* Кнопка поиска */}
      <div style={{ marginTop: "15px" }}>
        <Button>Search</Button>
      </div>
    </form>
  );
}

export default Filters;
