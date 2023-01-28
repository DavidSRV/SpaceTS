import React, { useContext, useEffect } from "react";
import ViewDestination from "../../../components/viewDestination/ViewDestination";
import { PostitionContext } from "../../../context/PostitionSlice";
import {
  IDestination,
  IpositionContextType,
} from "../../../utils/models/interfaces";

const Titan = ({ destination }: IDestination): JSX.Element => {
  let { numbers, setNumbers } = useContext(
    PostitionContext
  ) as IpositionContextType;

  useEffect(() => {
    setNumbers({
      position1: 3,
      position2: 4,
    });
  }, [setNumbers]);

  return <ViewDestination destination={destination} />;
};

export default Titan;
