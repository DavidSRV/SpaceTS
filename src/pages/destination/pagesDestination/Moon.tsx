import React, { useContext, useEffect } from "react";
import ViewDestination from "../../../components/viewDestination/ViewDestination";
import { PostitionContext } from "../../../context/PostitionSlice";
import { IDestination, IpositionContextType } from "../../../utils/models/interfaces";

const Moon = ({ destination }: IDestination): JSX.Element => {


  let {numbers, setNumbers} = useContext(PostitionContext) as IpositionContextType;

  useEffect(() => {
    setNumbers({
      position1:0,
      position2:1
    })
  }, [setNumbers])

  return <ViewDestination destination={destination} />;
};

export default Moon;
