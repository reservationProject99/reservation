import { useEffect } from "react";
import Router from "../routes/Router";
import Sidebar from "../Sidebar/Sidebar";
import TopNav from "../TopNav/TopNav";
import "./lay.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  document.body.style = "background: var(--body-bg)"
  const navigate = useNavigate();

  const checkAccsees = async (role) => {
    const token = localStorage.getItem("token") || "";
    let id;

    try {
      const res = await axios.get("http://localhost:5000/checkToken", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (res.data.role === role) {
        console.log('Ok')
      }
      else {
        navigate('/')
      }

    } catch (err) {
      console.log(err);
      return '';
    }
  }

  useEffect( () => {
    checkAccsees('admin')
  }, [])

    return (
    <div className="mainCont">
      <div className="layout">
        <Sidebar />
        <div className="main__layout">
          <TopNav />

          <div className="content">
            <Router />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
