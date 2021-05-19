import React from "react";

export default function Footer(props) {
  return (
    <footer>
      <p>{`${props[0]} - ${props[1]} - ${props[2]}`}</p>
    </footer>
  );
}
