import React,{createContext, useContext, useState} from 'react'
import dataInfo from  '../utils/data.json'
import { Idata } from '../utils/Idata';

interface IProps{
  children:any,
}

const Info = createContext<Idata | null>(null);

export default function infoProvider({children}:IProps):JSX.Element{
  
  const [data, setData] = useState<Idata>(dataInfo);

  return(
    <Info.Provider value={data, setData}></Info.Provider>
  )



}
