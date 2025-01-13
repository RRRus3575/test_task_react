import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CamperDetailsPage() {
  const { id } = useParams();
  const [camper, setCamper] = useState(null);
  const navigate = useNavigate();

  // Возвращаемся на предыдущую страницу
  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    axios
      .get(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`)
      .then((response) => setCamper(response.data))
      .catch((error) => console.error("Error fetching camper details:", error));
  }, [id]);

  if (!camper) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Link to="/catalog">
        <button onClick={handleGoBack}>Back to Catalog</button>
      </Link>
      <h1>{camper.name}</h1>
      <p>{camper.description}</p>
      {/* Дополнительная информация */}
      <ul>
        <li>Transmission: {camper.transmission}</li>
        <li>Engine: {camper.engine}</li>
        <li>AC: {camper.AC ? "Yes" : "No"}</li>
      </ul>
    </div>
  );
}

export default CamperDetailsPage;
