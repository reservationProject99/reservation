import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routers from "./routers/Routers";
// import { Route } from "react-router";

function App() {
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
}

export default App;
