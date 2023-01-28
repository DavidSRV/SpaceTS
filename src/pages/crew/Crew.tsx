import React from "react";
import { Outlet } from "react-router";

const Crew = (): JSX.Element => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Crew;
