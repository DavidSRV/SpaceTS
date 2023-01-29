import React, { useContext, useEffect } from "react";
import ViewDestination from "../../../components/viewDestination/ViewDestination";
import { PostitionContext } from "../../../context/PostitionSlice";
import { IpositionContextType } from "../../../utils/models/interfaces";

const Mars = (): JSX.Element => {
  let { setNumbers } = useContext(PostitionContext) as IpositionContextType;

  useEffect(() => {
    setNumbers({
      position1: 1,
      position2: 2,
    });
  }, [setNumbers]);

  return <ViewDestination />;
};
export default Mars;
