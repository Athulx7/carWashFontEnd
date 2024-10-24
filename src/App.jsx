import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import WashCenters from "./pages/WashCenters";
import Contactus from "./pages/Contactus";
import Auth from "./pages/Auth";
import ShowmoreHomeWash from "./pages/ShowmoreHomeWash";
import SelectedWashCenter from "./pages/SelectedWashCenter";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import OwnerDashboard from "./Owner/OwnerDashboard";
import AdminDash from "./Admin/AdminDash";
import Ownercenterdetail from "./Owner/Ownercenterdetail";
import OwnerVIewAvailability from "./Owner/OwnerVIewAvailability";
import OwnerUser from "./Owner/OwnerUser";
import OwnerBooking from "./Owner/OwnerBooking";
import OwnerReview from "./Owner/OwnerReview";
import AdminUsers from "./Admin/AdminUsers";
import AdminCenter from "./Admin/AdminCenter";
import AdminReview from "./Admin/AdminReview";
import AdminAddcenterOwner from "./Admin/AdminAddcenterOwner";
import AdminOwnerCompliants from "./Admin/AdminOwnerCompliants";

function App() {
  return (
    <>
      <Routes>
        
        <Route path="/dashing" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/washcenter" element={<WashCenters />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth register="register" />} />
        <Route path="/showmorewash" element={<ShowmoreHomeWash />} />
        <Route path="/selectedwash/:id" element={<SelectedWashCenter />} />


        <Route path="/ownerdash" element={<OwnerDashboard />} />
        <Route path="/ownercenter" element={<Ownercenterdetail />} />
        <Route
          path="/ownerviewavailability"
          element={<OwnerVIewAvailability />}
        />
        <Route path="/owneruser" element={<OwnerUser />} />
        <Route path="/ownerbooking" element={<OwnerBooking />} />
        <Route path="/ownerreview" element={<OwnerReview />} />


        <Route path="/admindash" element={<AdminDash />} />
        <Route path="/adminuser" element={<AdminUsers />} />
        <Route path="/admincenter" element={<AdminCenter />} />
        <Route path="/adminreview" element={<AdminReview />} />
        <Route path="/adminaddowner" element={<AdminAddcenterOwner />} />
        <Route path="/adminownercomplaint" element={<AdminOwnerCompliants />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
