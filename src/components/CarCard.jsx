import { Link } from "react-router-dom";

function CarCard({
  make,
  model,
  year,
  pricePerDay,
  location,
  features,
  basics,
  images,
  description,
  _id,
}) {
    return (
        <div className="CarCard card">
            <Link to={`/cars/${_id}`}>
                <h3>{make}</h3>
            </Link>
            <p style={{ maxWidth: "400px" }}>{model}</p>
            <p style={{ maxWidth: "400px" }}>{year}</p>
            <p style={{ maxWidth: "400px" }}>${pricePerDay}</p>
            <p style={{ maxWidth: "400px" }}>{location}</p>
            <p style={{ maxWidth: "400px" }}>{features.join(', ')}</p>
            <p style={{ maxWidth: "400px" }}>{basics.join(', ')}</p>   
            <p style={{ maxWidth: "400px" }}>{images}</p>
            <p style={{ maxWidth: "400px" }}>{description}</p>

        </div>
    );
}

export default CarCard;
