// src/pages/LoginPage.jsx

import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link, useNavigate } from "react-router-dom";
import { post } from "../services/authService";

function LoginPage() {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const [thisUser, setThisUser] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(undefined);
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  //   const handleEmail = (e) => setEmail(e.target.value);
  //   const handlePassword = (e) => setPassword(e.target.value);

  const handleTextChange = (e) => {
    setThisUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    post("/auth/login", thisUser)
      .then((response) => {
        console.log("Login response ===>", response.data);
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    // <div className="LoginPage">
    //   <h1>Login</h1>

    //   <form onSubmit={handleLoginSubmit}>
    //     <label>Email:</label>
    //     <input
    //       type="email"
    //       name="email"
    //       value={thisUser.email}
    //       onChange={handleTextChange}
    //     />

    //     <label>Password:</label>
    //     <input
    //       type="password"
    //       name="password"
    //       value={thisUser.password}
    //       onChange={handleTextChange}
    //     />

    //     <button type="submit">Login</button>
    //   </form>
    //   {errorMessage && <p className="error-message">{errorMessage}</p>}

    //   <p>Don't have an account yet?</p>
    //   <Link to={"/signup"}> Sign Up</Link>
    // </div>

    // WITH BOOTSTRAP
    <div className="login-page-background">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1 className="text-center mb-4">Log in</h1>
            <form onSubmit={handleLoginSubmit} className="mb-3">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={thisUser.email}
                  onChange={handleTextChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={thisUser.password}
                  onChange={handleTextChange}
                />
              </div>

              <button type="submit" className="btn btn-custom-login w-100">Log in</button>
            </form>

            {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
            <p className="text-center">
              Don't have an account yet? <Link to={"/signup"}>Sign Up</Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;