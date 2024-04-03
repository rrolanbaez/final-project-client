import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { get, put, axiosDelete } from "../services/authService";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function EditReservationPage() {

    const [ startDate, setStartDate ] = useState("");
    const [ endDate, setEndDate ] = useState("");
    const [ errorMessage, setErrorMessage] = useState("");

    const { reservationId } = useParams();

    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const requestBody = { startDate, endDate };

        put(`/reservations/edit/${reservationId}`, requestBody)
        .then((response) => {
            console.log(response.data)
            // navigate(`/reservations/${reservationId}`);
            navigate(`/reservations`);
        })
        .catch((error) => {
            setErrorMessage(error.response.data.message)
            console.log(error)
        });
    };

    const deleteReservation = () => {
        axiosDelete(`/reservations/delete/${reservationId}`)
        .then(() => {
            navigate('/reservations');
        })
        .catch((error) => {
            setErrorMessage(error.response.data.message)
            console.log(error)
        });
    };


useEffect(() => {
    console.log(startDate)
    console.log(endDate)
}, [startDate, endDate])

    useEffect(() => {
        get(`/reservations`)
            .then((response) => {
                const oneReservation = response.data.find(reservation => reservation._id === reservationId);
                setStartDate(new Date(oneReservation.startDate));
                setEndDate(new Date(oneReservation.endDate));
            })
            .catch((error) => console.log(error));
    }, [reservationId]);

    return (
        <div className="EditReservationPage">
            <h2 className="text-center">Edit Reservation</h2>

            <form onSubmit={handleFormSubmit}>
                <label>Start Time:</label>
                {/* <input type="datetime" name="startDate" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} /> */}
                <DatePicker 
                    selected={startDate} 
                    onChange={(date) => setStartDate(date)} 
                    showTimeSelect 
                    dateFormat="Pp" 
                    className="form-control"
                    id="startDate"
                />

                <label>End Date:</label>
                <DatePicker 
                    selected={endDate} 
                    onChange={(date) => setEndDate(date)} 
                    showTimeSelect 
                    dateFormat="Pp"
                    className="form-control"
                    id="endDate"
                />

                <button type="submit" className="btn btn-custom-buttons">Update RSVP</button>
            </form>

            <button className="btn btn-outline-danger" onClick={deleteReservation}>Cancel RSVP</button>

            {errorMessage && <p>{errorMessage}</p>}
        </div>
    )
};

export default EditReservationPage;