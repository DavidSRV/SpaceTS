import React, { useContext, useEffect } from "react";
import ViewDestination from "../../../components/viewDestination/ViewDestination";
import { PostitionContext } from "../../../context/PostitionSlice";
import {
  IpositionContextType,
} from "../../../utils/models/interfaces";

const Titan = (): JSX.Element => {
  let { setNumbers } = useContext(
    PostitionContext
  ) as IpositionContextType;

  useEffect(() => {
    setNumbers({
      position1: 3,
      position2: 4,
    });
  }, [setNumbers]);

  return <ViewDestination  />;
};

export default Titan;
