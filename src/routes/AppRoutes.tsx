import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import DashboardLayout from "../components/layout/DashboardLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Doctors from "../pages/Doctors";
import DoctorProfile from "../pages/DoctorProfile";
import AiSymptomChecker from "../pages/AiSymptomChecker";
import MedicinePage from "../pages/Medicine";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import BlogPost from "../pages/BlogPost";
import { Privacy, Terms } from "../pages/Legal";
import NotFound from "../pages/NotFound";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";

import Overview from "../pages/dashboard/Overview";
import Appointments from "../pages/dashboard/Appointments";
import Prescriptions from "../pages/dashboard/Prescriptions";
import Orders from "../pages/dashboard/Orders";
import SavedDoctors from "../pages/dashboard/SavedDoctors";
import Notifications from "../pages/dashboard/Notifications";
import Profile from "../pages/dashboard/Profile";
import Patients from "../pages/dashboard/Patients";
import AdminUsers from "../pages/dashboard/admin/Users";
import DoctorsAdmin from "../pages/dashboard/admin/DoctorsAdmin";
import OrdersAdmin from "../pages/dashboard/admin/OrdersAdmin";
import MedicinesAdmin from "../pages/dashboard/admin/MedicinesAdmin";
import Analytics from "../pages/dashboard/admin/Analytics";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:id" element={<DoctorProfile />} />
        <Route path="/ai-symptom-checker" element={<AiSymptomChecker />} />
        <Route path="/medicine" element={<MedicinePage />} />
        <Route path="/medicine/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Overview />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="prescriptions" element={<Prescriptions />} />
        <Route path="orders" element={<Orders />} />
        <Route path="saved-doctors" element={<SavedDoctors />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="profile" element={<Profile />} />
        <Route path="patients" element={<Patients />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="doctors-admin" element={<DoctorsAdmin />} />
        <Route path="orders-admin" element={<OrdersAdmin />} />
        <Route path="medicines-admin" element={<MedicinesAdmin />} />
        <Route path="analytics" element={<Analytics />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
