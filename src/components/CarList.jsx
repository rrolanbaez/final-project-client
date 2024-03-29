import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { get } from "../services/authService";
import { Link } from "react-router-dom";

import CarCard from "./CarCard";
//import AddCar from "./AddCar";    // no quiero que salga este form en la lista de carros, CAMBIAR DESPUES

function CarList() {

    const [cars, setCars] = useState([]);

    const { user } = useContext(AuthContext)

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
            {cars.map((car) => (
                <CarCard key={car._id} {...car} />
            ))}

            {/* <AddCar refreshCars={getAllCars} /> */}
            <div className="text-center">
                <Link to={"/cars/addcar"} className="btn btn-primary">Add Car</Link>
            </div>
        </div>
    )
};

export default CarList;