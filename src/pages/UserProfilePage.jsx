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
      <div>
        <h2>{user.name}</h2>
        <img src={user.image} alt="user image" />
        <form onSubmit={handleSubmit}>
          <label htmlFor="user-image">Change image</label>
          <input
            type="file"
            name="user-image"
            onChange={(e) => handlePhoto(e)}
            disabled={disabled}
          />
          <button type="submit" disabled={disabled}>confirm</button>
        </form>
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
