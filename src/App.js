import { NavLink } from "react-router-dom";
import "./App.css";
import cameraI from './assets/CameraI.jpg';
import cameraII from './assets/CameraII.jpg';
export const App = () => {
  return (
    <div className="App">
      <h1 className="main-title">WELCOME</h1>
      <h2 className="title">Start searching for your favorite photos</h2>
      <NavLink to='/search' ><button className="main-button">Start Here!</button></NavLink>
      <div className="image-container">
        <img src={cameraI} className="image-1" alt="Hand holding a camera"></img>
        <img src={cameraII} className="image-2" alt="Man with several cameras around"></img>
      </div>
    </div>
  );
}

