import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {App} from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import {NavBar} from './components/NavBar';
import Search from './pages/search';
import Favorites from './pages/favorites';
import {Footer} from "./components/footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </Provider>
 // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
