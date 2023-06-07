/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
// import Home from "../pages/Home";
// import About from "../pages/About";
// import CarListing from "../pages/CarListing";
// import CarDetails from "../pages/CarDetails";
// import BlogDetails from "../pages/BlogDetails";
// import NotFound from "../pages/NotFound";
// import Contact from "../pages/Contact";
// import SignIn from "../pages/SignIn";
// import SignUp from "../pages/SignUp";
// import Layout from "../components/Dashboard/Layout/Layout";
// import Providers from "../pages/Dashboard/Providers";
// import Settings from "../pages/Dashboard/Settings";
// import Costumers from "../pages/Dashboard/Costumers";
// import Cars from "../pages/Dashboard/Cars";
// import Dashboard from "../pages/Dashboard/Dashboard";
// import Admins from "../pages/Dashboard/Admins";
// import RentedCars from "../pages/Dashboard/RentedCars";
// import ProfilePage from "../pages/userProfile";
// import Checkout from "../pages/Checkout";
// import Edit from "../components/UI/ProfileProvider";
// import ProviderUplodedCar from "../pages/PoviderUplodedCar";
// import ProviderAddCar from "../pages/providerAddCar";
// import axios from "axios";
// import { useEffect, useState } from "react";

// const Routers = ({updateIsLog}) => {

//   const navigate = useNavigate();
//   const [adminRole, setAdminRole] = useState();
//   const [costumerRole, setCostumerRole] = useState();
//   const [providerRole, setProviderRole] = useState();
//   const [isLoading, setIsLoading] = useState(true);

//   const checkAccess = async () => {
//     const token = localStorage.getItem("token") || "";

//     try {
//       const res = await axios.get("http://localhost:5000/checkToken", {
//         headers: {
//           authorization: `Bearer ${token}`,
//         },
//       });

//       if (res.data.role === 'admin') {
//         setAdminRole(true);
//       }
//       else if (res.data.role === 'provider') {
//         setProviderRole(true)
//       }
//       else if (res.data.role === 'customer') {
//         setCostumerRole(true);
//       }
//       else {
//         setAdminRole(false);
//         setProviderRole(false);
//         setCostumerRole(false);
//       }
//       setIsLoading(false)
//     } catch (err) {
//       console.log(err);
//       setIsLoading(false)
//     }
//   }

//   useEffect(() => {
//     checkAccess();
//   }, []);

//   return (
//     <>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <Routes>
//         <Route path="/" element={<Navigate to="/home" />} />
//         <Route exact path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/cars" element={<CarListing />} />
//         <Route path="/cars/:slug" element={<CarDetails />} />
//         <Route path="/blogs/:slug" element={<BlogDetails />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/signIn" element={<SignIn updateIsLog={updateIsLog} />} />
//         <Route path="/signUp" element={<SignUp />} />
//         <Route path="/providerAddCar" element={ providerRole ? <ProviderAddCar /> : <NotFound />} />
//         <Route path="/ProviderUplodedCar" element={ providerRole ? <ProviderUplodedCar/> : <NotFound />} />
//         <Route path="/userProfile" element={<ProfilePage />} />
//         <Route path="/Checkout/:slug" element={<Checkout />} />
//         <Route path="/Edit" element={<Edit />} />
//         <Route path="/admin" element={ adminRole ? <Layout /> : <NotFound />}>
//           <Route path="Dashboard" index element={ adminRole ? <Dashboard/>  : <NotFound /> }/>
//           <Route path="Cars" element={adminRole ? <Cars />  : <NotFound /> } />
//           <Route path="Costumers" element={adminRole ? <Costumers />  : <NotFound /> } />
//           <Route path="settings" element={adminRole ? <Settings />  : <NotFound /> } />
//           <Route path="Providers" element={adminRole ? <Providers />  : <NotFound /> } />
//           <Route path="Admins" element={adminRole ? <Admins /> : <NotFound />} />
//           <Route path="RentedCars" element={adminRole ? <RentedCars />  : <NotFound /> } />
//         </Route>
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       )}
//     </>
//   );
// };

// export default Routers;

/* eslint-disable no-unused-vars */
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Layout from "../components/Dashboard/Layout/Layout";
import Providers from "../pages/Dashboard/Providers";
import Settings from "../pages/Dashboard/Settings";
import Costumers from "../pages/Dashboard/Costumers";
import Cars from "../pages/Dashboard/Cars";
import Dashboard from "../pages/Dashboard/Dashboard";
import Admins from "../pages/Dashboard/Admins";
import RentedCars from "../pages/Dashboard/RentedCars";
import ProfilePage from "../pages/userProfile";
import Checkout from "../pages/Checkout";
import Edit from "../components/UI/ProfileProvider";
import ProviderUplodedCar from "../pages/PoviderUplodedCar";
import ProviderAddCar from "../pages/providerAddCar";
import ThankY from "../components/UI/ThankY";

const Routers = ({ updateIsLog }) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<CarListing />} />
        <Route path="/cars/:slug" element={<CarDetails />} />
        <Route path="/blogs/:slug" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signIn" element={<SignIn updateIsLog={updateIsLog} />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/providerAddCar" element={<ProviderAddCar />} />
        <Route path="/ProviderUplodedCar" element={<ProviderUplodedCar />} />
        <Route path="/userProfile" element={<ProfilePage />} />
        <Route path="/Checkout/:slug" element={<Checkout />} />
        <Route path="/ThankY" element={<ThankY />} />
        <Route path="/Edit" element={<Edit />} />
        <Route path="/admin" element={<Layout />}>
          <Route path="Dashboard" index element={<Dashboard />} />
          <Route path="Cars" element={<Cars />} />
          <Route path="Costumers" element={<Costumers />} />
          <Route path="settings" element={<Settings />} />
          <Route path="Providers" element={<Providers />} />
          <Route path="Admins" element={<Admins />} />
          <Route path="RentedCars" element={<RentedCars />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Routers;
