import { Outlet } from "react-router";
import { IDestination } from "../../utils/models/interfaces";
import "./_destinations.scss";

export const Destination = (): JSX.Element => {

  return (
    <>
      <Outlet/>
    </>
  );
};
