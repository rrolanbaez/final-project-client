import { get } from "../services/authService"
import { useEffect, useState } from "react"
import { returnReadableTime } from "../services/time"
import { useParams } from "react-router-dom";

const Reservations = () => {

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

        <div>
            <h2>My Reservations</h2>
            {reservations.length > 0 ? (
                reservations.map((reservation, index) => (
                    <div key={index}>
                        <p>Start time: {returnReadableTime(reservation.startDate)}</p>
                        <p>End time: {returnReadableTime(reservation.endDate)}</p>
                    </div>
                ))
            ) : (
                <p>No reservations found.</p>
            )}
        </div>
  )
}

export default Reservations;