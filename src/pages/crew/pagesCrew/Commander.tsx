import React from 'react'
import ViewCrew from '../../../components/viewCrew/ViewCrew'
import { ICrew } from '../../../utils/models/interfaces'

function Commander({crew}:ICrew) {
  return (
    <>
      <ViewCrew crew={crew} />
    </>
  )
}

export default Commander