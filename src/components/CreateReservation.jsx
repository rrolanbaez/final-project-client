import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { AuthContext } from "../context/auth.context";
import { post } from "../services/authService";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CreateReservation(){

    const [ startDate, setStartDate ] = useState();
    const [ endDate, setEndDate ] = useState();

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { carId } = useParams();

    const handleReservation = (e) => {
        e.preventDefault();
    
        console.log("Date values", startDate, endDate)

        const reservationData = {
            user: user._id,
            car: carId,
            startDate,
            endDate,
        }

        post('/reservations', reservationData)
            .then((completedReservation) => {
                console.log("New reservation ===>", completedReservation.data)
                navigate('/reservations')
            })
            .catch((err) => {
                console.log("Error creating reservation", err)
            })
    };

    return (
        // <div>
        //     <h2>Create Reservation</h2>
        //     <form onSubmit={handleReservation}>
        //         <div>
        //             {/* showTimeSelect looks ugly, fix later */}
        //             <label>Start Date:</label>
        //             <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} showTimeSelect dateFormat="Pp"/>
        //         </div>
        //         <div>
        //             <label>End Date:</label>
        //             <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} showTimeSelect dateFormat="Pp"/>
        //         </div>

        //         <button type="submit" className="btn-custom-buttons">Reserve Car</button>
        //     </form>
        // </div>

        // With Bootstrap
        <div className="container mt-4 text-center">
            <h2>Create Reservation</h2>
            <form onSubmit={handleReservation} className="mt-3">
                <div className="mb-3">
                <label htmlFor="startDate" className="form-label">Start Date:</label>
                <DatePicker 
                    selected={startDate} 
                    onChange={(date) => setStartDate(date)} 
                    showTimeSelect 
                    dateFormat="Pp" 
                    className="form-control"
                    id="startDate"
                />
                </div>
                <div className="mb-3">
                <label htmlFor="endDate" className="form-label">End Date:</label>
                <DatePicker 
                    selected={endDate} 
                    onChange={(date) => setEndDate(date)} 
                    showTimeSelect 
                    dateFormat="Pp"
                    className="form-control"
                    id="endDate"
                />
                </div>
                <button type="submit" className="btn btn-custom-buttons">Reserve Car</button>
            </form>
        </div>
    )
};

export default CreateReservation;