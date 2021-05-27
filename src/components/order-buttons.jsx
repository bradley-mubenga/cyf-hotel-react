import React, { useState } from "react";

export function AddPizza() {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(oldOrder => oldOrder + 1);
  }

  return (
    <>
      <p>Pizzas: {orders} </p>
      <button onClick={orderOne} className="btn btn-primary">
        Add
      </button>
    </>
  );
}
