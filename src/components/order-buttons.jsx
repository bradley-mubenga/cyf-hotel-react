import React from "react";

export function AddPizza({ orderOne }) {
  return (
    <>
      <button onClick={orderOne} className="btn btn-primary">
        Add
      </button>
    </>
  );
}
