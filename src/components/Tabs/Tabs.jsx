import React, { useState } from "react";
import css from "./Tabs.module.css";
import Reviews from "../Reviews/Reviews";
import Features from "../Features/Features";

function Tabs({ camper, activeTab }) {
  return (
    <section className={css.container}>
      <div className={css.tabContent}>
        {activeTab === "details" && <Features camper={camper} />}
        {activeTab === "reviews" && <Reviews camper={camper} />}
      </div>
    </section>
  );
}

export default Tabs;
