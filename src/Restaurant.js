import React, { useState } from "react";
import Order from "../src/components/Order";

const Restaurant = () => {
  const pizza = "Pizzas";
  const salads = "Salads";
  const chocolateCake = "Chocolate Cake";

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order oderType={pizza} />
        <Order oderType={salads} />
        <Order oderType={chocolateCake} />
      </ul>
    </div>
  );
};

export default Restaurant;
