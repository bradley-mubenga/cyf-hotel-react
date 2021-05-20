import React from "react";

export default function Footer(props) {
  return (
    <footer className="text-center">
      <ul>
        <li>{props.address[0]}</li>
        <li>{props.address[1]}</li>
        <li>{props.address[2]}</li>
      </ul>
    </footer>
  );
}
