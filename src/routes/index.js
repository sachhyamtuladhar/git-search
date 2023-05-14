import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Results from "../pages/Results";
import FouroFour from "../pages/404";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/results" element={<Results />} />
        <Route path="*" element={<FouroFour />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
