import React, { useContext, useEffect } from 'react'
import ViewCrew from '../../../components/viewCrew/ViewCrew'
import { PostitionContext } from '../../../context/PostitionSlice'
import { IpositionContextType } from '../../../utils/models/interfaces'

function Commander() {

  let {setNumbers} = useContext(PostitionContext) as IpositionContextType

  useEffect(() => {
    setNumbers({
      position1:0,
      position2:1
    })
  }, [setNumbers])
  return (
    <>
      <ViewCrew  />
    </>
  )
}

export default Commander