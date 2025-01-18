import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import CamperDetailsSections from "../components/CamperDetailsSection/CamperDetailsSection";

function CamperDetailsPage() {
  const { id } = useParams();
  const [camper, setCamper] = useState(null);

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
