import { useContext, useEffect, useState } from "react";
import { get, post, axiosDelete } from "../services/authService"
import { AuthContext } from "../context/auth.context";

import CarCard from "../components/CarCard";


const FavoritesPage = () => {
    
    const [favorites, setFavorites] = useState([]);

    const { user, toggling } = useContext(AuthContext);

    const getFavorites = () => {

        get('/favorites/populated')
            .then((response) => {
                console.log("this is the favorites page response", response.data)
                setFavorites(response.data)
            })
            .catch((err) => {
                console.log("Error fetching favs", err)
            })
    }

    useEffect(() => {
        getFavorites()
    }, [toggling])

    const removeFavorite = (carId) => {
        axiosDelete(`/favorites/${carId}`)
            .then(() => {
                let newFavorites = favorites.filter((favorite) => favorite._id != carId)
                setFavorites(newFavorites)
            })
            .catch((err) => {
                console.log("Error removing fav", err)
            })
    }

    return (
        <div className="CarList">
            {/* <div className="container mt-5"> */}
                <h2 className="mb-4 text-center">My Favorite Cars</h2>
                {favorites.length > 0 ? (
                    favorites.map(car => (
                        <div key={car._id}>
                            <CarCard {...car} />
                            {/* <button onClick={() => removeFavorite(car._id)}>♥</button> */}
                        </div>
                    ))
                ) : (
                    <p className="text-center w-100">No favorites added yet.</p>
                )}
            {/* </div> */}
        </div>    
    );
};

export default FavoritesPage;