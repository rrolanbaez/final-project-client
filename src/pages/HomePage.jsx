// FALTA EDITAR HOME PAGE COMPLETO
// const imgURL = "https://www.shutterstock.com/image-photo/road-trip-car-holiday-happy-600nw-2115317861.jpg";

// function HomePage() {
//     return (
//       <div className="home-page">
//         <div className="img-container">
//           <img src={imgURL} className="page-img"></img>
//           <h1 className="centered"><strong>Home Page</strong></h1>
//         </div>

//         <div className="content">
//           <div className="row">
//             <div className="col-md-6">
//               <h1>HOME PAGE DRAFT</h1>
//               <p className="mt-3" style={{ textAlign: 'justify' }}>Something here</p>
//             </div>
//           </div>
//         </div>

//         <h1>Home Page</h1>
        
//       </div>

//     );
//   }
//   export default HomePage;

import React from 'react';

const imgURL = "https://www.shutterstock.com/image-photo/road-trip-car-holiday-happy-600nw-2115317861.jpg";

function HomePage() {
  return (
    <div className="home-page">
      <header className="py-5">
        <div className="container px-5 pb-5">
          <div className="row gx-5 align-items-center">
            <div className="col-xxl-5">
              <div className="text-center text-xxl-start">
                {/* <span className="badge bg-gradient-primary-to-secondary text-white mb-4">
                  Design &middot; Development &middot; Marketing
                </span> */}
                {/* <div className="fs-3 fw-light text-muted mb-3">I can help your business to</div> */}
                <h1 className="display-3 fw-bolder mb-5">
                  <span className="text-gradient d-inline">Drive.Share.Explore</span>
                </h1>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                  <a className="btn btn-custom-grad btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" href="/signup">
                    Sign Up
                  </a>
                  <a className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" href="/login">
                    Log in
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-7">
              <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                <div className="profile bg-gradient-primary-to-secondary">
                  <img className="profile-img" src={imgURL} alt="Profile" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HomePage;