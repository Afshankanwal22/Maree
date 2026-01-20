import { Routes, Route } from "react-router-dom";

import MainHome from "./components/Main-Home";
// import FloatingPortfolio from ".//FloatingPortfolio";
// import PinterestPortfolio from "./pages/PinterestPortfolio";

export default function App() {
  return (
    <Routes>
      <Route path="/main-home" element={<MainHome />} />
      {/* <Route path="/portfolio-floating" element={<FloatingPortfolio />} /> */}
      {/* <Route path="/portfolio-pinterest" element={<PinterestPortfolio />} /> */}
    </Routes>
  );
}
