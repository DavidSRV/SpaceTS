import React from 'react'
import ViewDestination from '../../../components/viewDestination/ViewDestination';
import { IDestination } from '../../../utils/models/interfaces'

const Mars = ({destination, position}:IDestination):JSX.Element => {
  return  <ViewDestination destination={destination}  />;
}
;

export default Mars;