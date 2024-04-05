import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useParams, Link, useNavigate } from "react-router-dom";
import { get, axiosDelete } from "../services/authService";

import CreateReservation from "../components/CreateReservation";
import Carousel from "react-bootstrap/Carousel";

function CarDetailsPage(props) {
  const [car, setCar] = useState(null);
  const { carId } = useParams();

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [ showReservationForm, setShowReservationForm ] = useState(false);

  const getCar = () => {
    get(`/cars/details/${carId}`)
      .then((response) => {
        const oneCar = response.data;
        console.log(oneCar);
        setCar(oneCar);
      })
      .catch((err) => console.log(err));
  };

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

  const toggleReservationForm = () => {
    setShowReservationForm(!showReservationForm);
  };

  useEffect(() => {
    getCar();
  }, [carId]);

  return (
    <div className="CarList car-details-container text-center">
      {car && (
        <div className="card" style={{ maxWidth: '600px', margin: 'auto' }}>
          <div className="card-body">
            <h3 className="card-title">{car.make}</h3>
            <p className="card-text">
            <strong>Model:</strong> {car.model}</p>
            <p><strong>Year:</strong> {car.year}</p>
            <p><strong>$</strong> {car.pricePerDay} <strong>/ day</strong></p>
            <p><strong>Pick up:</strong> {car.location}</p>
            <p><strong>Features:</strong> {car.features.join(", ")}</p>
            <p><strong>Basics:</strong> {car.basics.join(", ")}</p>

            <Carousel>
              {car.images?.map((photo, index) => (
                <Carousel.Item key={index} style={{ height: '250px', width: '450px' }}>   
                  <img 
                    className="d-block w-100 car-img" 
                    src={photo} 
                    alt={`${car.make} ${car.model} - ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>

            <p style={{ textAlign: 'justify'}}><strong>Description:</strong> {car.description}</p>

            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', width: '100%' }}>    
              <Link to="/cars" className="btn btn-custom-buttons" style={{ marginRight: '10px' }}>
                Back to cars
              </Link>
            </div>  

            {/* RSVP only for CLIENT user role */}
            { user && car && user._id !== car.owner && (
              <>
                <button onClick={toggleReservationForm} className="btn btn-custom-buttons" >
                  {showReservationForm ? 'Cancel' : 'Reserve Car'}
                </button>  
                {showReservationForm && <CreateReservation/>}
              </>
            )}
          </div>  
        </div>
      )}

      {/* Only for HOST role */}
      {user && car && user._id === car.owner && (
        <div className="mt-3 mb-3"style={{ display: 'flex', justifyContent: 'center' }}>
          <Link to={`/cars/edit/${carId}`} className="btn btn-custom-buttons" style={{ margin: '0 30px' }}>
            Edit Car
          </Link>

          <button onClick={deleteCar} className="btn btn-danger">
            Remove Car
          </button>
        </div>
      )}
    </div>
  );
}

export default CarDetailsPage;
