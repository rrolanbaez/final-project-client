import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { post, get, axiosDelete } from "../services/authService";

function FavoriteBtn({ carId }) {
    const { user, toggling, setToggling } = useContext(AuthContext);
    const [isFavorite, setIsFavorite] = useState(false);
    
    const checkFavorite = async () => {
      try {
        const response = await get('/favorites');
        console.log("These are the favorites ===>", response.data)
        if (response.data.length > 0) {
          console.log("This is the includes===>", response.data.includes(carId))
          setIsFavorite(response.data.includes(carId));
        }
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    useEffect(() => {
        // Check if the car is already in the user's favorites list
        checkFavorite();
    }, [carId, user._id]);

    const toggleFavorite = async () => {
    try {
      if (isFavorite) {
        await axiosDelete(`/favorites/${carId}`);
        checkFavorite()
        console.log("unFavorite")
        setToggling(!toggling)
      } else {
        console.log("add to favorite")
        await post(`/favorites/${carId}`)
        checkFavorite()
        setToggling(!toggling)
      }
    } catch (error) {
        console.error("Error toggling favorite:", error);
    }
    };

    return (
    <button onClick={toggleFavorite} className="like-button">
        {isFavorite ? "♥" : "♡"}
    </button>
    );
}

export default FavoriteBtn;