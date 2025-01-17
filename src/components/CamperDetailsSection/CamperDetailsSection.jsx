import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Gallery from "../Gallery/Gallery";
import Tabs from "../Tabs/Tabs";
import css from "./CamperDetailsSection.module.css";
import FormDetails from "../FormDetails/FormDetails";

function CamperDetailsSections() {
  const { id } = useParams();
  const [camper, setCamper] = useState(null);

  const [activeTab, setActiveTab] = useState("details");

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
    <div className="container">
      <h1 className="visually-hidden">Catalog details</h1>
      <Gallery camper={camper} />

      <div className={css.details}>
        <div className={css.tabButtons}>
          <button
            className={`${css.tabButton} ${
              activeTab === "details" ? css.active : ""
            }`}
            onClick={() => setActiveTab("details")}
          >
            Features
          </button>
          <button
            className={`${css.tabButton} ${
              activeTab === "reviews" ? css.active : ""
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>
        <div className={css.featursandfeedback}>
          <Tabs camper={camper} activeTab={activeTab} />
          <FormDetails />
        </div>
      </div>
    </div>
  );
}

export default CamperDetailsSections;
