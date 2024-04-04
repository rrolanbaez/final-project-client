import "./App.css";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

import CarList from "./components/CarList";
import EditCarPage from "./pages/EditCarPage";
import CarDetailsPage from "./pages/CarDetailsPage";
import AddCar from "./components/AddCar";
import CreateReservation from "./components/CreateReservation";
import ReservationsPage from "./pages/ReservationsPage";
import EditReservationPage from "./pages/EditReservationPage";
import UserProfilePage from "./pages/UserProfilePage";

import FavoritesPage from "./pages/FavoritesPage";


function App() {
  const getToken = () => {
    return localStorage.getItem("authToken");
  };

  const LoggedIn = () => {
    return getToken() ? <Outlet /> : <Navigate to="/login" />;
  };

  const NotLoggedIn = () => {
    return !getToken() ? <Outlet /> : <Navigate to="/" />;
  };

  return (
    <div className="App">
    
      <Navbar />

      <Routes>
        <Route exact path="/" element={<HomePage />} />

        <Route element={<LoggedIn />}>
          <Route exact path="/cars" element={<CarList />} />
          <Route exact path="/cars/details/:carId" element={<CarDetailsPage />} />
          <Route exact path="/cars/edit/:carId" element={<EditCarPage />} />
          <Route exact path ="/cars/addcar" element={<AddCar />}/>

          {/* ANADIR RUTAS RSVPs */}
          <Route exact path="/reservations" element={<ReservationsPage />} />
          {/* <Route exact path="/reservations/edit/:reservationId" element={<EditReservationPage />} /> */}

          <Route exact path="/reservations/edit/:reservationId" element={<EditReservationPage />} />


          {/* PROFILE PAGE */}
          <Route exact path="/profile" element={<UserProfilePage />} />

          <Route exact path="/favorites" element={<FavoritesPage />} />



        </Route>

        <Route element={<NotLoggedIn />}>

          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />

        </Route>

      </Routes>

    </div>
  );
}

export default App;






