import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { multiFileChange } from "../services/imageUpload";
import { get, put, axiosDelete } from "../services/authService";

function EditCarPage() {

    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [pricePerDay, setPricePerDay] = useState("");
    const [location, setLocation] = useState("");
    const [features, setFeatures] = useState("");
    const [basics, setBasics] = useState("");
    const [images, setImages] = useState("");
    const [description, setDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [disabled, setDisabled] = useState(false);

    const { carId } = useParams();

    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const requestBody = {make, model, year, pricePerDay, location, features, basics, images, description};

        put(`/cars/update/${carId}`, requestBody)
            .then((response) => {
                navigate(`/cars/details/${carId}`);
            })
            .catch((err) => {
                setErrorMessage(err.response.data.message)
                console.log(err)
            });
    };

    const deleteCar = () => {
        axiosDelete(`/cars/delete/${carId}`)
            .then(() => {
                navigate('/cars');
            })
            .catch((err) => {
                setErrorMessage(err.response.data.message)
                console.log(err)
            });
    };

    useEffect(() => {
        get(`/cars/details/${carId}`)
            .then((response) => {
                const oneCar = response.data;

                setMake(oneCar.make);
                setModel(oneCar.model);
                setYear(oneCar.year);
                setPricePerDay(oneCar.pricePerDay);
                setLocation(oneCar.location);
                setFeatures(oneCar.features);
                setBasics(oneCar.basics);
                setImages(oneCar.images);      // nose si las imagenes funciona diferente
                setDescription(oneCar.description);
            })
            .catch((err) => console.log(err));
    }, [carId]);

    const handlePhoto = (e) => {
        setDisabled(true);
    
        multiFileChange(e)
            .then((response) => {
                console.log("This is the array response", response)
                setImages(response)
                setDisabled(false)
            })
            .catch((err) => {
                console.log(err)
            })
    };

    return (
        <div className="EditCarPage container mt-5">
            <h2 className="text-center">Edit Car Information</h2>

            <form onSubmit={handleFormSubmit}>
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

                {/* ARREGLAR ESTO: This one is for a LINK */}
                {/* <div className="mb-3">
                    <label htmlFor="images" className="form-label">Images:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="images"
                        name="images"
                        value={images}
                        onChange={(e) => setImages(e.target.value)}
                    />
                </div> */}
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
                <div className="mb-4 button-group" style={{ display: 'flex', justifyContent: 'center' }}>
                    <button type="submit" className="btn btn-custom-buttons" style={{ marginRight: '10px' }}>Update Car</button>
                    <button type="submit" className="btn btn-danger" style={{ marginRight: '10px' }} onClick={deleteCar}>Delete Car</button>
                </div>

            </form>


            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
};

export default EditCarPage; 