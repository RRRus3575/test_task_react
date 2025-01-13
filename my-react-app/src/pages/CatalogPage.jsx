import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../store/campersSlice";
import { Link } from "react-router-dom";
import Filters from "../components/Filters";

function CatalogPage() {
  const [filteredCampers, setFilteredCampers] = useState([]);
  const dispatch = useDispatch();
  const campers = useSelector((state) => state.campers.campers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  useEffect(() => {
    setFilteredCampers(campers);
  }, [campers]);

  const handleFilterChange = (filters) => {
    const { location, options, type } = filters;

    const filtered = campers.filter((camper) => {
      const matchesLocation =
        !location ||
        camper.location.toLowerCase().includes(location.toLowerCase());

      const matchesOptions =
        Array.isArray(options) && options.length > 0
          ? options.every((item) => {
              if (item === "transmission") {
                return camper.transmission === "automatic";
              }
              return camper[item] === true;
            })
          : true;

      const matchesType =
        !type || camper.form.toLowerCase() === type.toLowerCase();

      return matchesLocation && matchesOptions && matchesType;
    });

    setFilteredCampers(filtered);
  };

  return (
    <div>
      <h1>Catalog</h1>
      <Link to="/">
        <button style={{ padding: "10px 20px", fontSize: "16px" }}>Home</button>
      </Link>
      <Filters onFilterChange={handleFilterChange} />
      <ul>
        {filteredCampers && filteredCampers.length > 0 ? (
          filteredCampers.map((camper) => (
            <li key={camper.id}>
              <h2>{camper.name}</h2>
              <p>{camper.description}</p>
              <Link to={`/catalog/${camper.id}`}>
                <button>Show more</button>
              </Link>
            </li>
          ))
        ) : (
          <p>No campers available</p>
        )}
      </ul>
    </div>
  );
}

export default CatalogPage;
