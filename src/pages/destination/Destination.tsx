import { Outlet } from "react-router";
import { IDestination } from "../../utils/models/interfaces";
import "./_destinations.scss";

export const Destination = ({ destination }: IDestination): JSX.Element => {

  return (
    <>
      <Outlet/>
    </>
  );
};
