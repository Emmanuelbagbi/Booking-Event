import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import once globally
import HomePage from "./Pages/Homepage/Homepage";
import AdminDashboard from "./Pages/Admin/fusionfiesta_admin_dashboard";
import Events from './Pages/Events/Events';
import Faq from './Pages/Faq/Faq';
import Details from "./Pages/Details/Details";
import AboutUs from "./Pages/About/AboutUs";
import ContactUs from "./Pages/Contact/ContactUs";
import SignUp from "./Pages/SignUp/SignUp"; 
import Login from "./Pages/LogIn/Login";
import Gallery from "./Pages/Gallery/Gallery";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/events/:id" element={<Details />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="*" element={<HomePage />} />
      </Routes>

            
    <ToastContainer position="top-right" autoClose={3000} />

    </Router>
  );
};


export default App;

