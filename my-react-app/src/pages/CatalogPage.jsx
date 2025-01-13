import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../store/campersSlice";

function CatalogPage() {
  const dispatch = useDispatch();
  const campers = useSelector((state) => state.campers.campers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div>
      <h1>Catalog</h1>
      <ul>
        {campers.map((camper) => (
          <li key={camper.id}>
            <h2>{camper.name}</h2>
            <p>{camper.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CatalogPage;
