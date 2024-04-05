import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { get } from "../services/authService";
import CarCard from "./CarCard";

function CarList() {

    const [cars, setCars] = useState([]);
    const { user } = useContext(AuthContext);

    const getAllCars = () => {

        if(user && user.role === 'client') {        
            get('/cars')
                .then((response) => setCars(response.data))
                .catch((err) => console.log(err));
        } else if (user) {
            get('/cars')
            .then((response) => {

                let theseCars = response.data.filter((car) => car.owner == user._id )
                setCars(theseCars)
            })
            .catch((err) => console.log(err));
        }
    };

    useEffect(() => {
        getAllCars();
    }, [user]);

    return (
        <div className="CarList">
            <h2 className="text-center">Cars for Rent</h2>
            {cars.map((car) => (
                <CarCard key={car._id} {...car} />
            ))}

            {/* Only show the Add Car btn to HOSTS role */}
            {user && user.role !== 'client' && ( 
                <div className="text-center mb-4">
                    <Link to={"/cars/addcar"} className="btn btn-custom-buttons">Add Car</Link>
                </div>
            )}
        </div> 
    )
};

export default CarList;