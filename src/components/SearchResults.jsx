import React from "react";

import moment from "moment";
moment().format();

export default function SearchResults({ results }) {
  function getDiff(checkIn, checkOut) {
    var a = moment(checkOut);
    var b = moment(checkIn);
    return a.diff(b, "days");
  }

  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">first name</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th>
          <th scope="col">check out date</th>
          <th scope="col">days in</th>
        </tr>
      </thead>
      <tbody>
        {results ? (
          results.map(booking => (
            <tr key={booking.id}>
              <th scope="row">{booking.id}</th>
              <td>{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>{getDiff(booking.checkInDate, booking.checkOutDate)}</td>
            </tr>
          ))
        ) : (
          <h1>No Data Availible</h1>
        )}
      </tbody>
    </table>
  );
}
