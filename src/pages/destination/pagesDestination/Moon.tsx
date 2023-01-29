import React, { useContext, useEffect } from "react";
import ViewDestination from "../../../components/viewDestination/ViewDestination";
import { PostitionContext } from "../../../context/PostitionSlice";
import {
  IpositionContextType,
} from "../../../utils/models/interfaces";

const Moon = (): JSX.Element => {
  let { setNumbers } = useContext(PostitionContext) as IpositionContextType;

  useEffect(() => {
    setNumbers({
      position1: 0,
      position2: 1,
    });
  }, [setNumbers]);

  return <ViewDestination />;
};

export default Moon;
