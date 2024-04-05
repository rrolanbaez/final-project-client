import React from 'react';
import { Link } from 'react-router-dom';

const imgURL = "https://www.shutterstock.com/image-photo/road-trip-car-holiday-happy-600nw-2115317861.jpg";

function HomePage() {
  return (
    <div className="home-page">
      <header className="py-5 mb-5">
        <div className="container px-5 pb-5">
          <div className="row gx-5 align-items-center">
            <div className="col-xxl-5">
              <div className="text-center text-xxl-start">
                <h1 className="display-3 fw-bolder mb-5">
                  <span className="text-gradient d-inline">Drive.Share.Explore</span>
                  <div className="fs-3 fw-light text-white mb-3">Car rentals from local hosts</div>
                </h1>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                  <a className="btn btn-custom-grad btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder">
                    <Link to={'/signup'}>Sign Up</Link>
                  </a>
                  <a className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder">
                    <Link to={'/login'}>Log in</Link>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-7 position-relative text-center mt-4">
              <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                <div className="home-circle bg-gradient-primary-to-secondary"></div>
                  <div className="home bg-gradient-primary-to-secondary">
                  <img className="home-img" src={imgURL} alt="home" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Browse by Make Section */}
      <section className="pb-5" style={{ marginTop: '80px' }}>
        <div className="container px-5">
          <h3 className="fw-bolder text-white mb-4">Browse by Make</h3>
          <div className="row row-cols-1 row-cols-md-3 g-5">
            {/* Carro 1 */}
            <div className="col">
              <div className="card" style={{ background: 'linear-gradient(0deg, rgba(28,224,223,1) 0%, rgba(193,255,114,1) 100%)', height: '250px' }}>
                <div className="card-body">
                  <h5 className="card-title text-center">Jeep</h5>
                  <img 
                    src='https://www.visittheusa.com/sites/default/files/styles/hero_l/public/2017-07/b06f102809a7cae54294ac95531fa850.jpeg?h=e07dedd2&itok=3CbeXe1J' 
                    style={{ 
                      maxWidth: "300px", 
                      height: "auto",
                      display: "block",
                      margin: "auto",
                      borderRadius: "10px" 
                    }}
                  />
                </div>
              </div>
            </div>
            {/* Carro 2 */}
            <div className="col">
              <div className="card" style={{ background: 'linear-gradient(0deg, rgba(28,224,223,1) 0%, rgba(193,255,114,1) 100%)', height: '250px' }}>
                <div className="card-body">
                  <h5 className="card-title text-center">Toyota</h5>
                  <img 
                    src="https://www.motortrend.com/uploads/2023/10/2024-Toyota-RAV4-TRD-front-view-20.jpg"
                    style={{ 
                      maxWidth: "300px", 
                      height: "auto",
                      display: "block",
                      margin: "auto",
                      borderRadius: "10px" 
                    }}
                  />
                </div>
              </div>
            </div>
            {/* Carro 3 */}
            <div className="col">
              <div className="card" style={{ background: 'linear-gradient(0deg, rgba(28,224,223,1) 0%, rgba(193,255,114,1) 100%)', height: '250px' }}>
                <div className="card-body">
                  <h5 className="card-title text-center">Ford</h5>
                  <img 
                    src="https://spn-sta.spinny.com/blog/20220228132846/ford_2017_ecosport_019.jpg?compress=true&quality=80&w=800&dpr=2.6"
                    style={{ 
                      width: "300px", 
                      height: "auto",
                      display: "block",
                      margin: "auto",
                      borderRadius: "10px" 
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="custom-section py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6"><img className="rounded-circle img-fluid" src="https://media.glamour.com/photos/573a06d4c852bf7f53df0fed/16:9/w_4575,h_2573,c_limit/pch-road-trip.jpg" alt="Conquer the outdoors"/></div>
            <div className="col-md-6">
              <h2 className="display-4 fw-bolder text-white">Find the perfect car to explore <span className="text-gradient">Puerto Rico</span></h2>
              <div className="d-flex">
                <Link to="/cars" className="btn btn-custom-grad fw-bolder">Browse cars</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Kivo works section */}
      <section>
        <div className="container pb-5 text-center">
          <div className="row">
            <div className="col-12">
              <h2 className='mb-4 gradient-heading text-white display-4'>How Kivo works</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 text-md-start">
              <div className="mb-3">
                <h3 style={{ color: '#C1FF72' }}>1. Find the perfect car</h3>
                <p className='text-white'>Enter a city in Puerto Rico and date and browse hundreds of cars shared by local hosts.</p>
              </div>
              <div className="mb-3">
                <h3 style={{ color: '#C1FF72' }}>2. Book your trip</h3>
                <p className='text-white'>Book on the Kivo app or online and say hi to your host! Cancel for free up to 24 hours before your trip.</p>
              </div>
              <div className="mb-3">
                <h3 style={{ color: '#C1FF72' }}>3. Hit the road</h3>
                <p className='text-white'>Have the car delivered or pick it up from your host. Check in with the app, grab the keys, and hit the road!</p>
              </div>
            </div>
            <div className="col-md-6">
              <img src="https://media.istockphoto.com/id/1313215118/photo/your-new-car-key.jpg?s=612x612&w=0&k=20&c=GPhmrrKaWuuXiOTGI6NjY1pt9iJncYjb397G7ANg25w=" alt="Key exchange" className="img-fluid" style={{ maxWidth: '300px', height: 'auto', borderRadius: "5%" }} />
            </div>
          </div>
        </div>
      </section>    
    </div>
  );
}

export default HomePage;