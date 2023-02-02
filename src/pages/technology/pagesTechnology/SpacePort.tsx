import React, { useContext, useEffect } from 'react'
import ViewTechnology from '../../../components/viewTechnology/ViewTechnology'
import { PostitionContext } from '../../../context/PostitionSlice'
import { IpositionContextType } from '../../../utils/models/interfaces'

const SpacePort = ():JSX.Element => {

  let {setNumbers} = useContext(PostitionContext) as IpositionContextType

  useEffect(() => {
    setNumbers({
      position1:1,
      position2:2 
    })
  }, [setNumbers])

  return (

    <ViewTechnology/>
  )
}

export default SpacePort