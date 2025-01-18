import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Gallery from "../Gallery/Gallery";
import Tabs from "../Tabs/Tabs";
import css from "./CamperDetailsSection.module.css";
import FormDetails from "../FormDetails/FormDetails";
import ContentLoader from "react-content-loader";

function CamperDetailsSections() {
  const { id } = useParams();
  const [camper, setCamper] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeTab, setActiveTab] = useState("details");

  // Запрос данных с сервера
  useEffect(() => {
    setLoading(true);
    setError(false);
    axios
      .get(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`)
      .then((response) => {
        setCamper(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(True);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <ContentLoader viewBox="0 0 500 280" height={600} width={1000}>
        <rect x="3" y="3" rx="10" ry="10" width="300" height="180" />
        <rect x="6" y="190" rx="0" ry="0" width="292" height="20" />
        <rect x="4" y="215" rx="0" ry="0" width="239" height="20" />
        <rect x="4" y="242" rx="0" ry="0" width="274" height="20" />
      </ContentLoader>
    );
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
