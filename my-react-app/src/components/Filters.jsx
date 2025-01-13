import React, { useState } from "react";

const equipmentOptions = ["AC", "kitchen", "TV", "bathroom", "transmission"];

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

  // Обработка кнопки поиска
  const handleSearch = () => {
    onFilterChange(filters);
  };

  return (
    <div>
      {/* Фильтр по локации */}
      <div>
        <label>Location</label>
        <input
          type="text"
          name="location"
          placeholder="Kyiv, Ukraine"
          value={filters.location}
          onChange={handleInputChange}
          style={{
            display: "block",
            margin: "10px 0",
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ddd",
          }}
        />
      </div>

      {/* Фильтры по оборудованию */}
      <div>
        <h3>Vehicle equipment</h3>
        {equipmentOptions.map((item) => (
          <label
            key={item}
            style={{
              display: "inline-block",
              margin: "5px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              value={item}
              onChange={handleCheckboxChange}
              style={{ marginRight: "5px" }}
            />
            {item.toUpperCase()}
          </label>
        ))}
      </div>

      {/* Тип кузова */}
      <div>
        <h3>Vehicle type</h3>
        {["alcove", "van", "fully integrated"].map((type) => (
          <button
            key={type}
            onClick={() => handleTypeChange(type)}
            style={{
              margin: "5px",
              padding: "10px 15px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: filters.type === type ? "#f05454" : "#fff",
              color: filters.type === type ? "#fff" : "#000",
              cursor: "pointer",
            }}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)} {/* Alcove, Van */}
          </button>
        ))}
      </div>

      {/* Кнопка поиска */}
      <div>
        <button
          onClick={handleSearch}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#f05454",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Filters;
