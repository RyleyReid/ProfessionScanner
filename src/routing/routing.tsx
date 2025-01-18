import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Calculator } from "../pages/calculator/Calculator";
import { Dashboard } from "../pages/dashboard/Dashboard";

export enum RoutePaths {
  Dashboard = "/",
  Calculator = "/calculator"
}

export const AppRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={RoutePaths.Dashboard} element={<Dashboard />} />
        <Route path={RoutePaths.Calculator} element={<Calculator />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};
