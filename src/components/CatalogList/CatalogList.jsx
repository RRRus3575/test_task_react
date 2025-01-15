import Button from "../Button/Button";
import { Link } from "react-router-dom";

function CatalogList({ paginatedCampers, handleLoadMore, filteredCampers }) {
  return (
    <div>
      <ul>
        {paginatedCampers.map((camper) => (
          <li key={camper.id}>
            <h2>{camper.name}</h2>
            <p>{camper.description}</p>
            <Link to={`/catalog/${camper.id}`}>
              <Button>Show more</Button>
            </Link>
          </li>
        ))}
      </ul>
      {paginatedCampers.length < filteredCampers.length && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
      {paginatedCampers.length === 0 && <p>No campers found.</p>}
    </div>
  );
}

export default CatalogList;
