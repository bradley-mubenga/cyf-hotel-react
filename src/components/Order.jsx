import React, { useState } from "react";
import { AddPizza } from "./order-buttons";

export default function Order() {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(oldOrder => oldOrder + 1);
  }

  return (
    <li>
      <p>Pizzas: {orders} </p>
      <AddPizza orderOne={orderOne} />
    </li>
  );
}
