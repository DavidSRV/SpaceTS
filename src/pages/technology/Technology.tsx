import React from 'react'
import { Iinfo } from '../../utils/Idata'

const Technology = ({ info }: Iinfo) => {
  const renderTechnology = ():JSX.Element=>{
    return ( 
      info.map((info) => {
        return (
          <div>{info}</div>
        )
      })
    )
  }
}

export default Technology