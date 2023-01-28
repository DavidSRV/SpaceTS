import React, { useContext, useEffect } from 'react'
import ViewDestination from '../../../components/viewDestination/ViewDestination';
import { PostitionContext } from '../../../context/PostitionSlice';
import { IDestination, IpositionContextType } from '../../../utils/models/interfaces'

const Mars = ({destination}:IDestination):JSX.Element => {

  let {numbers, setNumbers} = useContext(PostitionContext) as IpositionContextType;

  useEffect(()=> {
    setNumbers({
      position1: 1,
      position2:2
    })
  },[setNumbers])

  return  <ViewDestination destination={destination}/>;
}
;

export default Mars;