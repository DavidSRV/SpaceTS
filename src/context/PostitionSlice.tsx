import React, { createContext, useState } from "react";
import { Iposition, IpositionContextType } from "../utils/models/interfaces";
import info from '../utils/data.json' 

interface Iprops {
    children:JSX.Element | JSX.Element[];
}

const data = info;

export const PostitionContext = createContext<IpositionContextType | null>(null);

export const PositionProvider  = ({ children }:Iprops) => {
    const [numbers, setNumbers] = useState<Iposition["position"]>({
        position1:0,
        position2:1
    });

    const [info, setInfo] = useState<any>(data)

    return (<PostitionContext.Provider value={{numbers, setNumbers}}>{children}</PostitionContext.Provider>);
};





