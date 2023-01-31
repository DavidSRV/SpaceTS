import React, { useContext, useEffect } from 'react'
import ViewCrew from '../../../components/viewCrew/ViewCrew'
import { PostitionContext } from '../../../context/PostitionSlice'
import { IpositionContextType } from '../../../utils/models/interfaces'

function FlightEngineer() {

  let {setNumbers} = useContext(PostitionContext) as IpositionContextType

  useEffect(() => {
    setNumbers({
      position1:3,
      position2:4
    })
  }, [setNumbers])
  
  return (
    <>
    <ViewCrew/>
    </>
  )
}

export default FlightEngineer