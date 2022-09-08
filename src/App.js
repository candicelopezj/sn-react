import logo from './logo.svg';
import Navbar from  './components/Navbar';
import Footer from  './components/Footer';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import RealEstate from "./pages/RealEstate";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="realestate" element={<RealEstate />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
