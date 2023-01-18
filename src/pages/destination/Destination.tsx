import React from "react";
import { IDestination } from "../../App";

const Destination = ({ destination }: IDestination): JSX.Element => {
  return <>{destination.map((destination) => <div>
    {destination.name}
  </div> )}</>;
};

export default Destination;
