import React from "react";
import { Route, Routes } from "react-router-dom";
import Accueil from "../Accueil/Accueil.page";
import FormationPage from "../Formation/Formation.page";
import NothingFoundBackground from "./NothingFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/formation" element={<FormationPage />} />
      <Route path="*" element={<NothingFoundBackground />} />
    </Routes>
  );
};

export default Router;
