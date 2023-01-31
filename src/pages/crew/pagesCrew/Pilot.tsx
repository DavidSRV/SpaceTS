import React, { useContext, useEffect } from 'react'
import ViewCrew from '../../../components/viewCrew/ViewCrew'
import { PostitionContext } from '../../../context/PostitionSlice'
import { IpositionContextType } from '../../../utils/models/interfaces'

function Pilot() {

let {setNumbers} = useContext(PostitionContext) as IpositionContextType

  useEffect(() => {
    setNumbers({
      position1:2,
      position2:3
    })
  }, [setNumbers])

  return (
    <>
    <ViewCrew/>
    </>
  )
}

export default Pilot