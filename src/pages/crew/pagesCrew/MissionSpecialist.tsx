import React, { useContext, useEffect } from 'react'
import ViewCrew from '../../../components/viewCrew/ViewCrew'
import { PostitionContext } from '../../../context/PostitionSlice'
import { IpositionContextType } from '../../../utils/models/interfaces'

const MissionSpecialist = ():JSX.Element => {

  let {setNumbers} = useContext(PostitionContext) as IpositionContextType

  useEffect(() => {
    setNumbers({
      position1:1,
      position2:2
    })
  }, [setNumbers])


  return (
    <>
    <ViewCrew />
    </>
    
  )
}

export default MissionSpecialist