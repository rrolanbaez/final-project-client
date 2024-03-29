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
    <div className="SignupPage">
      <h1>Sign Up</h1>

      <form onSubmit={handleSignupSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={newUser.email}
          onChange={handleTextChange}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={newUser.password}
          onChange={handleTextChange}
        />

        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={newUser.name}
          onChange={handleTextChange}
        />

        <label>Role:</label>
        <select
          name="role"
          value={newUser.role}
          onChange={handleTextChange}
          required
        >
          <option value="">Select your role</option>
          <option value="host">Host</option>
          <option value="client">Client</option>
        </select>

        <button type="submit">Sign Up</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
    </div>
  );
}

export default SignupPage;