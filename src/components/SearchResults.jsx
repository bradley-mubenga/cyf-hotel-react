import React from "react";

export default function SearchResults({ results }) {
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
              <td>{booking.checkInDate}</td>
            </tr>
          ))
        ) : (
          <h1>I'm Fake</h1>
        )}
      </tbody>
    </table>
  );
}
