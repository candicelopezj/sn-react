import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RealEstate from "./pages/RealEstate";
import VacationHomes from './pages/VacationHomes';
import VacationDetailPage from './pages/VacationDetailPage';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Home" element={<Home />}/>
      <Route path="/VacationDetailPage/:slug" element={<VacationDetailPage />} />
      <Route path="/VacationDetailPage" element={<VacationHomes />} />
      <Route path="/vacationHomes" element={<VacationHomes />} />
      <Route path="/realEstate" element={<RealEstate />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
