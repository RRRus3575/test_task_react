import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import CamperDetailsSections from "../components/CamperDetailsSection/CamperDetailsSection";

function CamperDetailsPage() {
  const { id } = useParams();
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
    <>
      <Header />
      <main>
        <CamperDetailsSections />
      </main>
    </>
  );
}

export default CamperDetailsPage;
