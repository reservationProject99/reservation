import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routers from "./routers/Routers";
import { useState } from "react";



function App() {

  const [isLog, updateIsLog] = useState(localStorage.getItem("token") ? true : false);

  return (
    <>
        {!window.location.pathname.includes("admin") ? <Header isLog={isLog} updateIsLog={updateIsLog} /> : null}
        <div>
          <Routers updateIsLog={updateIsLog} />
        </div>
        {!window.location.pathname.includes("admin") ? <Footer /> : null}
    </>
  );
}

export default App;
