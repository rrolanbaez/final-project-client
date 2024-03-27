import { useState, useEffect } from "react";
import { get } from "../services/authService";

import CarCard from "./CarCard";
//import AddCar from "./AddCar";    // no quiero que salga este form en la lista de carros

function CarList() {

    const [cars, setCars] = useState([]);

    const getAllCars = () => {
        get('/cars')
            .then((response) => setCars(response.data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getAllCars();
    }, []);

    return (
        <div className="CarList">
            {/* <AddCar refreshCars={getAllCars} /> */}

            {cars.map((car) => (
                <CarCard key={car._id} {...car} />
            ))}
        </div>
    )
};

export default CarList;