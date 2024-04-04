import { get } from "../services/authService"
import { useEffect, useState } from "react"
import { returnReadableTime } from "../services/time"
import { useParams, Link } from "react-router-dom";


import EditReservationPage from "./EditReservationPage";

const ReservationsPage = () => {

    const [reservations, setReservations] = useState([]);

    const getReservartions = () => {
        get('/reservations')
            .then((response) => {
                console.log("Found reservations", response.data)
                setReservations(response.data)
            })
            .catch((err) => {
                console.log(err)
            });
    };

    useEffect(() => {
        getReservartions();
    }, []);


  return (
    // <div>
    //     <h2>Reservations</h2>
    //     {
    //         reservations.length > 0 && 
    //         <>
    //             {reservations.map((reservation) => {
    //                 return <p>Start time: {returnReadableTime(reservation.startDate)}</p>
    //             })}
    //         </>
    //     }
    // </div>
        // <div>
        //     <h2>My Reservations</h2>
        //     {reservations.length > 0 ? (
        //         reservations.map((reservation, index) => (
        //             <div key={index}>
        //                 <p>Start time: {returnReadableTime(reservation.startDate)}</p>
        //                 <p>End time: {returnReadableTime(reservation.endDate)}</p>
        //             </div>
        //         ))
        //     ) : (
        //         <p>No reservations found.</p>
        //     )}
        // </div>

        // WITH BOOTSTRAP: 
        <div className="container mt-5">
            <h2 className="mb-4 text-center">My Reservations</h2>
                
                {reservations.length > 0 ? reservations.map((reservation, index) => (
                    <div className="card mb-3 text-center" key={index}>
                        <div className="card-body">
                            <h5 className="card-title">RSVP Details</h5>
                            <p className="card-text"> 
                                <strong>Car:</strong> {reservation.car.make} - {reservation.car.model} <span className="mx-2"></span>
                                <strong>Pick Up Location:</strong> {reservation.car.location} <span className="mx-4"></span>
                                <strong>Total:</strong> ${`${reservation.totalCost.toFixed(2)}`}
                            </p>
                            <p className="card-text"><strong>Pick Up Time:</strong> {returnReadableTime(reservation.startDate)}</p>
                            <p className="card-text"><strong>Drop Off Time:</strong> {returnReadableTime(reservation.endDate)}</p>
                        
                            <Link to={`/reservations/edit/${reservation._id}`}>
                                <button className="btn btn-custom-buttons mt-2">Edit RSVP</button>
                            </Link>
                        </div>
                    </div>
                )) : <p className="text-center w-100">No reservations found.</p>}
        </div>
    );
};

export default ReservationsPage;