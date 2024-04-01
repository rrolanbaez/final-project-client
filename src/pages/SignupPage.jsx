// src/pages/SignupPage.jsx

import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link, useNavigate } from "react-router-dom";
import { post } from "../services/authService";

function SignupPage() {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [name, setName] = useState("");

  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    name: "",
    role:"",
  });

  const [errorMessage, setErrorMessage] = useState(undefined);
  const { storeToken, authenticateUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  //   const handleEmail = (e) => setEmail(e.target.value);
  //   const handlePassword = (e) => setPassword(e.target.value);
  //   const handleName = (e) => setName(e.target.value);

  const handleTextChange = (e) => {
    setNewUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    // to make sure a role is selected
    if (!newUser.role) {
      setErrorMessage("Please select a role");
      return;
    }

    post("/auth/signup", newUser)
      .then((response) => {
        console.log("This is the new user ===>", response.data);
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.response.data.message);
        setNewUser({
            email: "",
            password: "",
            name: "",
            role: ""
          })
      });
  };

  return (
    // <div className="SignupPage">
    //   <h1>Sign Up</h1>

    //   <form onSubmit={handleSignupSubmit}>
    //     <label>Email:</label>
    //     <input
    //       type="email"
    //       name="email"
    //       value={newUser.email}
    //       onChange={handleTextChange}
    //     />

    //     <label>Password:</label>
    //     <input
    //       type="password"
    //       name="password"
    //       value={newUser.password}
    //       onChange={handleTextChange}
    //     />

    //     <label>Name:</label>
    //     <input
    //       type="text"
    //       name="name"
    //       value={newUser.name}
    //       onChange={handleTextChange}
    //     />

    //     <label>Role:</label>
    //     <select
    //       name="role"
    //       value={newUser.role}
    //       onChange={handleTextChange}
    //       required
    //     >
    //       <option value="">Select your role</option>
    //       <option value="host">Host</option>
    //       <option value="client">Client</option>
    //     </select>

    //     <button type="submit">Sign Up</button>
    //   </form>

    //   {errorMessage && <p className="error-message">{errorMessage}</p>}

    //   <p>Already have account?</p>
    //   <Link to={"/login"}> Login</Link>
    // </div>

    // USING BOOTSTRAP
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Sign Up</h1>
          <form onSubmit={handleSignupSubmit} className="mb-3">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={newUser.email}
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
                value={newUser.password}
                onChange={handleTextChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={newUser.name}
                onChange={handleTextChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="role" className="form-label">Role:</label>
              <select
                className="form-select"
                id="role"
                name="role"
                value={newUser.role}
                onChange={handleTextChange}
                required
              >
                <option value="">Select your role</option>
                <option value="host">Host</option>
                <option value="client">Client</option>
              </select>
            </div>
            <button type="submit" className="btn btn-custom-signup w-100">Sign Up</button>
          </form>
          {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
          <div className="text-center">
            <p>Already have an account?</p>
            <Link to={"/login"} className="btn btn-link">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;