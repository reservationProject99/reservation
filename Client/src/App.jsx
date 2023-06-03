import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routers from "./routers/Routers";
// import { Route } from "react-router";

function App() {
  return (
    <>
      {!window.location.pathname.includes("admin") ? <Header /> : null}
      <div>
        <Routers />
      </div>
      {!window.location.pathname.includes("admin") ? <Footer /> : null}
    </>
  );
}

export default App;
