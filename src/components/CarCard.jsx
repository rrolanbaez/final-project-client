import { Link } from "react-router-dom";
import FavoriteBtn from "./FavoritesBtn";
import Carousel from "react-bootstrap/Carousel";

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
          // <div className="CarCard card">
          //     <Link to={`/cars/details/${_id}`}>
          //         <h3>{make}</h3>
          //     </Link>
          //     <p style={{ maxWidth: "400px" }}>{model}</p>
          //     <p style={{ maxWidth: "400px" }}>{year}</p>
          //     <p style={{ maxWidth: "400px" }}>${pricePerDay}</p>
          //     <p style={{ maxWidth: "400px" }}>{location}</p>
          //     {/* <p style={{ maxWidth: "400px" }}>{features.join(', ')}</p>
          //     <p style={{ maxWidth: "400px" }}>{basics.join(', ')}</p>    */}
          //     {/* <img style={{ maxWidth: "400px" }}>{images}</img> */}
          //     {
          //         images.map((photo) => {
          //             return <img src={photo} alt='car' style={{width: '200px', height: '150px'}}/>
          //         })
          //     }
          //     {/* <p style={{ maxWidth: "400px" }}>{description}</p> */}

          // </div>

          // WITH BOOTSTRAP
          <div className="CarCard card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="card-text">
                    <Link to={`/cars/details/${_id}`}>
                      <h3>{make}</h3>
                    </Link>
                    <p>Model: {model}</p>
                    <p>Year: {year}</p>
                    <p>${pricePerDay} / day</p>
                    <p>Pick up: {location}</p>
                    <FavoriteBtn carId={_id} />
                  </div>
                </div>

                <div className="col-md-6">
                  <Carousel>
                      {images?.map((photo, index) => (
                        <Carousel.Item key={index} style={{ height: '250px', objectFit: 'cover' }}>   
                          <img 
                            className="d-block w-100 car-img" 
                            src={photo} 
                            alt={`${make} ${model} - ${index + 1}`}
                          />
                        </Carousel.Item>
                      ))}
                  </Carousel>
                </div>

              </div>
            </div>
          </div>
      );
}

export default CarCard;
