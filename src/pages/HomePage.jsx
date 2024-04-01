// FALTA MUCHO AQUI
const imgURL = "https://www.shutterstock.com/image-photo/road-trip-car-holiday-happy-600nw-2115317861.jpg";

function HomePage() {
    return (
      <div className="home-page">
        <div className="img-container">
          <img src={imgURL} className="page-img"></img>
          <h1 className="centered"><strong>Home Page</strong></h1>
        </div>

        <div className="content">
          <div className="row">
            <div className="col-md-6">
              <h1>HOME PAGE DRAFT</h1>
              <p className="mt-3" style={{ textAlign: 'justify' }}>Something here</p>
            </div>
          </div>
        </div>

        <h1>Home Page</h1>
        
      </div>

    );
  }
  export default HomePage;