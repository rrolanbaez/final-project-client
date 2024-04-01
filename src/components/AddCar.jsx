import { useState } from "react";
import { post } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { fileChange, multiFileChange } from "../services/imageUpload";

import axios from "axios";

function AddCar() {

    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [pricePerDay, setPricePerDay] = useState("");
    const [location, setLocation] = useState("");
    const [features, setFeatures] = useState("");
    const [basics, setBasics] = useState("");
    const [images, setImages] = useState([]);
    const [description, setDescription] = useState("");
    const [disabled, setDisabled] = useState(false)

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const requestBody = { 
            make,
            model,
            year,
            pricePerDay,
            location,
            features,
            basics,
            images,
            description,
        };

        post('/cars', requestBody)
            .then((response) => {
                setMake("");
                setModel("");
                setYear("");
                setPricePerDay("");
                setLocation("");
                setFeatures("");
                setBasics("");
                setImages("");      // nose si las imagenes funciona diferente
                setDescription("");
                navigate("/cars");
            })
            .catch((error) => console.log(error));
    };

    const handlePhoto = (e) => {

        setDisabled(true)

        multiFileChange(e)
            .then((response) => {
                console.log("This is the array response", response)
                setImages(response)
                setDisabled(false)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    return (

        <div className="AddCar container mt-5">
            <h2>Add a Car</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="make" className="form-label">Make:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="make"
                        name="make"
                        value={make}
                        onChange={(e) => setMake(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="model" className="form-label">Model:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="model"
                        name="model"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="year" className="form-label">Year:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="year"
                        name="year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="pricePerDay" className="form-label">Price per day:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="pricePerDay"
                        name="pricePerDay"
                        value={pricePerDay}
                        onChange={(e) => setPricePerDay(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="location" className="form-label">Location:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="location"
                        name="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="features" className="form-label">Features:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="features"
                        name="features"
                        value={features}
                        onChange={(e) => setFeatures(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="basics" className="form-label">Basics:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="basics"
                        name="basics"
                        value={basics}
                        onChange={(e) => setBasics(e.target.value)}
                    />
                </div>

                {/* SEE HOW CAN I UPLOAD IMAGES FROM MY COMPUTER */}
                <div className="mb-3">
                    <label htmlFor="images" className="form-label">Images:</label>
                    <input
                        type="file"
                        className="form-control"
                        id="images"
                        name="images"
                        onChange={handlePhoto}
                        multiple  //to allow multiple imgs upload
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <button disabled={disabled} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )

}

export default AddCar; 