import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function CamperDetailsPage() {
  const { id } = useParams(); // Получаем ID из маршрута
  const [camper, setCamper] = useState(null);

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
