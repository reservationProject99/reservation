import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
// import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Provider from "../pages/Provider";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import User from "../pages/userProfile";
import Layout from "../components/Dashboard/Layout/Layout";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/provider" element={<Provider />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/user" element={<User />} />
      <Route path="/dashboard" element={<Layout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
