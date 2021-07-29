import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./components/SearchResults";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => setBookings(data))
      .catch(error => console.log(error.message));
  }, []);

  const search = searchVal => {
    if (searchVal.length > 0) {
      let searchedBooking = bookings.filter(
        booking => booking.firstName === searchVal
      );
      setBookings(searchedBooking);
      console.log(searchedBooking);
    }
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
