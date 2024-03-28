import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useParams, Link, useNavigate } from "react-router-dom";
import { get, axiosDelete } from "../services/authService";

function CarDetailsPage(props) {
  const [car, setCar] = useState(null);
  const { carId } = useParams();

  const { user } = useContext(AuthContext);
  //const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const getCar = () => {
    get(`/cars/details/${carId}`)
      .then((response) => {
        const oneCar = response.data;
        console.log(oneCar);
        setCar(oneCar);
      })
      .catch((err) => console.log(err));
  };

  // const handleDelete = () => {
  //     console.log("deleting")
  // }

  const deleteCar = () => {
    axiosDelete(`/cars/delete/${carId}`)
        .then(() => {
            console.log("deleting")
            navigate('/cars');
        })
        .catch((err) => {
            console.log(err)
        });
};

  useEffect(() => {
    getCar();
  }, [carId]);

  return (
    <div className="CarDetails">
      {car && (
        <>
          <h3>{car.make}</h3>
          <p>{car.model}</p>
          <p>{car.year}</p>
          <p>{car.pricePerDay}</p>
          <p>{car.location}</p>
          <p>{car.features.join(", ")}</p>
          <p>{car.basics.join(", ")}</p>

          {/* not sure if this will work for the imgs */}
          {car.images.map((photo) => {
            return (
              <img
                src={photo}
                alt="car"
                style={{ width: "200px", height: "150px" }}
              />
            );
          })}

          <p>{car.description}</p>
        </>
      )}

      <Link to="/cars" className="btn btn-info">
        Back to cars
      </Link>

      {user && car && user._id === car.owner && (
        <>
          <Link to={`/cars/edit/${carId}`} className="btn btn-primary">
            Edit Car
          </Link>

          <button onClick={deleteCar} className="btn btn-danger">
            Remove Car
          </button>
        </>
      )}
    </div>
  );
}

export default CarDetailsPage;
