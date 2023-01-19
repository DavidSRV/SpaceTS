import React from "react";
import { IDestination } from "../../App";

const Destination = ({ destination }: IDestination): JSX.Element => {
  return (
    <>
      {destination.map((destination) => (
        <div>
          <h1>{destination.name}</h1>
        </div>
      ))}
    </>
  );
};

export default Destination;
