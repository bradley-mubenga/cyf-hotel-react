import React from "react";

import Bookings from "./Bookings";
import Heading from "./components/Heading";
import Resturant from "./Restaurant";

import {
  Glasgow,
  Manchester,
  London
} from "../src/components/TouristInfoCards";
import Footer from "../src/components/Footer";

import "./App.css";

const App = () => {
  const footerDetails = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];

  return (
    <div className="App">
      <Heading />
      <div className="d-flex flex-wrap justify-content-center">
        <Glasgow />
        <Manchester />
        <London />
      </div>
      <Bookings />
      <Resturant />
      <Footer address={footerDetails} />
    </div>
  );
};

export default App;
