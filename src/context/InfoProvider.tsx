import React,{createContext, useContext, useState} from 'react'
import data from  '../utils/data.json'

export dataContext = React.createContext< | null>(null);

function InfoProvider({children}) {
  return (
    <div>InfoProvider</div>
  )
}

export default InfoProvider