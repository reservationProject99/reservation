/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/SignUp.css";

export default function SignIn({ updateIsLog, setUserLogged }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [path, setPath] = useState("/");
  const [accessToken, setAccessToken] = useState(false);

  useEffect(() => {
    setAccessToken(JSON.parse(localStorage.getItem("token")));

    if (accessToken) {
      checkToken().then((resultUsers) => {
        setUserLogged(resultUsers);
        navigate(path);
      });
    }
  });

  const [massageWarning, setMassageWarning] = useState({
    email: "",
    password: "",
  });

  function handleEmail(event) {
    const patternEmail = /^[A-z0-9\.]+@[A-z0-9]+\.[A-z]{3,5}$/;
    const email = event.target.value;

    if (email === "") {
      setMassageWarning({ ...massageWarning, email: "" });
    } else if (!patternEmail.test(email)) {
      setMassageWarning({ ...massageWarning, email: "Invalid email" });
    } else {
      setMassageWarning({ ...massageWarning, email: "" });

      setUser({ ...user, email: email });
    }
  }

  function handlePassword(event) {
    const patternPassword =
      /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,.?]).{8,}$/;
    const password = event.target.value;

    if (password === "") {
      setMassageWarning({ ...massageWarning, password: "" });
    } else if (!patternPassword.test(password)) {
      setMassageWarning({ ...massageWarning, password: "Invalid password" });
    } else {
      setMassageWarning({ ...massageWarning, password: "" });

      setUser({ ...user, password: password });
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const userCheck = await checkUsers(email, password);
    const token = await checkToken();

    if (token) {
      setUserLogged(token);
      updateIsLog(true);
      event.target.reset();
      navigate(path);
    } else if (userCheck) {
      localStorage.setItem("user", JSON.stringify(userCheck));
      await axios
        .post("http://localhost:5000/createToken", userCheck)
        .then((res) => {
          localStorage.setItem("token", JSON.stringify(res.data));
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

      updateIsLog(true);
      event.target.reset();
      navigate(path);
    } else {
      setMassageWarning({
        ...massageWarning,
        submit: "Password or email is incorrect.",
      });
    }
  }

  async function checkToken() {
    try {
      const response = await axios.get("http://localhost:5000/LogIn", {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async function checkUsers(email, password) {
    try {
      const response = await axios.get("http://localhost:5000/user");

      const result = response.data.filter((user) => {
        return user.email === email && user.password === password;
      });
      return result[0];
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  return (
    <>
      <div className="row bg-gray-100 text-gray-900 justify-content-center">
        <div className="row max-w-screen-lg m-0 m-sm-20 bg-white shadow-sm rounded-lg justify-content-center">
          <div className="col-lg-5 col-md-7 col-10">
            <div className="mt-12 d-flex flex-column align-items-center">
              <h1 className="text-2xl text-xl-3xl font-weight-bold text-blue-600">
                Sign Up to Join Us!
              </h1>
              <div className="w-100 flex-1 mt-8">
                <form onSubmit={handleSubmit}>
                  <div className="mx-auto max-w-xs">
                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className={`block mb-2 text-sm font-weight-medium"`}
                      >
                        Email
                      </label>
                      <input
                        onChange={handleEmail}
                        type="text"
                        id="email"
                        className={`form-control rounded-lg`}
                        placeholder="Enter your email"
                      />
                      <p className={`mt-2 text-sm text-warning-600`}>
                        {massageWarning.email}
                      </p>
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className={`block mb-2 text-sm font-weight-medium"`}
                      >
                        Password
                      </label>
                      <input
                        onChange={handlePassword}
                        type="password"
                        id="password"
                        className={`form-control rounded-lg`}
                        placeholder="Enter your password"
                      />
                      <p className={`mt-2 text-sm text-warning-600`}>
                        {massageWarning.password}
                      </p>
                    </div>
                    <button
                      type="submit"
                      className={`mt-3 btn btn-primary w-100 py-3 rounded-lg d-flex align-items-center justify-content-center`}
                    >
                      <svg
                        className="w-6 h-6 -ml-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="8.5" cy="7" r="4" />
                      </svg>
                      <span className="ml-3">Sign in</span>
                    </button>
                    <p className={`mt-2 text-sm text-warning-600`}>
                      {massageWarning.submit}
                    </p>
                    <p className={`mt-2 text-sm text-primary-600`}>
                      Don't have an account!
                      <Link
                        to={
                          path === "/payment"
                            ? { pathname: "/signUp", search: "CheckOut" }
                            : "/signUp"
                        }
                        className={`font-weight-bold text-primary-600`}
                      >
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
