import React, { useState } from "react";
import { AddPizza } from "../src/components/order-buttons";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          <AddPizza />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
