import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useParams, Link } from "react-router-dom";

import { get, put } from "../services/authService";

import { fileChange } from "../services/imageUpload";

function UserProfilePage() {
  const [newImg, setNewImg] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const { user, authenticateUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await put("/users/update", { image: newImg });
      return authenticateUser();
    } catch (error) {
      console.log(error);
    }
  };

  // For the img upload
  const handlePhoto = (e) => {
    setDisabled(true);

    fileChange(e)
      .then((response) => {
        console.log("This is the array response", response);
        setNewImg(response.data.image);
        setDisabled(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    user && (

        <div className="container d-flex justify-content-center">
        <div className="card p-3 py-4 mt-5">
            <div className="d-flex justify-content-center mt-3 mb-3">
                <img
                    src={user.image}
                    alt="User Profile Img"
                    className="rounded-circle"
                    style={{ width: "150px", height: "150px"}}
                />
            </div>
            <h6 className="card-title text-center mb-3">User Name: {user.name}</h6>
            <p className="card-text text-center mb-3"> Email: {user.email}</p>
            <p className="card-text text-center mb-3"> Role: {user.role}</p>

            <form onSubmit={handleSubmit} className="text-center">
                <div className="mb-3">
                <label htmlFor="user-image">Change Profile Image:</label>
                <input
                    type="file"
                    className="form-control"
                    id="user-image"
                    name="user-image"
                    onChange={(e) => handlePhoto(e)}
                    disabled={disabled}
                />
                </div>
                <button type="submit" className="btn btn-custom-buttons" disabled={disabled}>Confirm</button>
            </form>
        </div>
        </div>
    )
  );
  // for now I just want the user to upload/update a profile Picture, the name,

  // But  I want them to see the email, password (***), and role (or maybe they can edit the role)

  // USER MODEL
  // email: {
  //     type: String,
  //     unique: true,
  //     required: true,
  //   },
  //   password: {
  //     type: String,
  //     required: true,
  //   },
  //   name: {
  //     type: String,
  //     required: true,
  //   },
  //   role: {
  //     type: String,
  //     enum: ['host', 'client'],   //not sure
  //     required: true,
}

export default UserProfilePage;
