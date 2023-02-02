import { useContext, useEffect } from "react"
import ViewTechnology from "../../../components/viewTechnology/ViewTechnology"
import { PostitionContext } from "../../../context/PostitionSlice"
import { IpositionContextType } from "../../../utils/models/interfaces"



const SpaceCapsule = ():JSX.Element => {

  
  let {setNumbers} = useContext(PostitionContext) as IpositionContextType

  useEffect(() => {
    setNumbers({
      position1:2,
      position2:3 
    })
  }, [setNumbers])
  
  return (
    <ViewTechnology/>
  )
}

export default SpaceCapsule