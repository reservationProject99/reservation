import { Routes, Route } from "react-router-dom";

import Dashboard from "../../../pages/Dashboard/Dashboard";
import Costumers from "../../../pages/Dashboard/Costumers";
import Settings from "../../../pages/Dashboard/Settings";
import Cars from "../../../pages/Dashboard/Cars";
import Providers from "../../../pages/Dashboard/Providers";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Cars" element={<Cars />} />
        <Route path="/Costumers" element={<Costumers />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/Providers" element={<Providers />} />
      </Route>
    </Routes>
  );
};

export default Router;
