import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import CampusMap from "../pages/CampusMap";
import BuildingList from "../pages/BuildingList";
import Navigation from "../pages/Navigation";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/map" element={<CampusMap />} />
        <Route path="/buildings" element={<BuildingList />} />
        <Route path="/navigation" element={<Navigation />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;