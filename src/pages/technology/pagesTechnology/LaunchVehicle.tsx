import React, { useContext, useEffect } from 'react'
import ViewTechnology from '../../../components/viewTechnology/ViewTechnology'
import { PostitionContext } from '../../../context/PostitionSlice'
import { IpositionContextType } from '../../../utils/models/interfaces'

const LaunchVehicle = ():JSX.Element => {

  
  let {setNumbers} = useContext(PostitionContext) as IpositionContextType

  useEffect(() => {
    setNumbers({
      position1:0,
      position2:1 
    })
  }, [setNumbers])

  
  return (
    <>
    <ViewTechnology/>
    </>
  )
}

export default LaunchVehicle