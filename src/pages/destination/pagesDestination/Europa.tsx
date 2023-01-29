import React, { useContext, useEffect } from "react";
import ViewDestination from "../../../components/viewDestination/ViewDestination";
import { PostitionContext } from "../../../context/PostitionSlice";
import { IpositionContextType } from "../../../utils/models/interfaces";

const Europa = (): JSX.Element => {
  let { setNumbers } = useContext(PostitionContext) as IpositionContextType;

  useEffect(() => {
    setNumbers({
      position1: 2,
      position2: 3,
    });
  }, [setNumbers]);

  return (
    <>
      <ViewDestination />
    </>
  );
};

export default Europa;
