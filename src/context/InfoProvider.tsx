import React,{createContext, useContext, useState} from 'react'
import dataInfo from  '../utils/data.json'
import { Idata } from '../utils/Idata';

const DataContext = createContext<Idata>;

export const DataProvider:React.FC = ({children}:any) => {
  const [data, setData ] = useState<Idata>(dataInfo);

  return(
    <DataContext.Provider value={{data, setData}}>{children}</DataContext.Provider>
  )

}